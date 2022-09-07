const runtimeCaching = require("next-pwa/cache");
const isProd = process.env.NODE_ENV === "production";

const WithPWA = require("next-pwa")({
  disable: isProd ? false : true,
  dest: "public",
  runtimeCaching,
});

module.exports = WithPWA({
  devIndicators: {
    buildActivityPosition: "bottom-left",
  },
  poweredByHeader: false,
  reactStrictMode: true,
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ["jannahfirdaus-image-cloud.s3.ap-southeast-1.amazonaws.com"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g|mp4)$/i,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });

    return config;
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: [
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // {
          //     key: 'Permissions-Policy',
          //     value: 'camera=(https://yourdomain.com), microphone=(https://yourdomain.com), geolocation=(https://yourdomain.com), interest-cohort=(https://yourdomain.com), fullscreen=(https://yourdomain.com)',
          // }, // change the link to real production domain or leave it empty see: https://www.w3.org/TR/permissions-policy-1/
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
});
