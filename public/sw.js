if (!self.define) {
  let e,
    s = {};
  const c = (c, i) => (
    (c = new URL(c + ".js", i).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const a = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[a]) return;
    let t = {};
    const r = (e) => c(e, a),
      d = { module: { uri: a }, exports: t, require: r };
    s[a] = Promise.all(i.map((e) => d[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(["./workbox-6a1bf588"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/static/chunks/1a48c3c1.de34af51f76791eb.js", revision: "de34af51f76791eb" },
        { url: "/_next/static/chunks/1bfc9850.a5c417712dac15be.js", revision: "a5c417712dac15be" },
        { url: "/_next/static/chunks/252.6b26e748284a4918.js", revision: "6b26e748284a4918" },
        { url: "/_next/static/chunks/306.1caf729ee3918182.js", revision: "1caf729ee3918182" },
        { url: "/_next/static/chunks/338.033bc37f097b240f.js", revision: "033bc37f097b240f" },
        { url: "/_next/static/chunks/488.2925a6f95db744d2.js", revision: "2925a6f95db744d2" },
        { url: "/_next/static/chunks/521.c5b6f7c0a3c22245.js", revision: "c5b6f7c0a3c22245" },
        { url: "/_next/static/chunks/545f34e4.03b142b13e7463c1.js", revision: "03b142b13e7463c1" },
        { url: "/_next/static/chunks/617.2d8c47c479d7b0d4.js", revision: "2d8c47c479d7b0d4" },
        { url: "/_next/static/chunks/651.ca936378e2c450b9.js", revision: "ca936378e2c450b9" },
        { url: "/_next/static/chunks/675.b48b0db0b06d62be.js", revision: "b48b0db0b06d62be" },
        { url: "/_next/static/chunks/741.8b828148889177c6.js", revision: "8b828148889177c6" },
        { url: "/_next/static/chunks/877.133f92be08d6ac7d.js", revision: "133f92be08d6ac7d" },
        { url: "/_next/static/chunks/902.57ef2cace3688ec0.js", revision: "57ef2cace3688ec0" },
        { url: "/_next/static/chunks/905.71c35318c0dce742.js", revision: "71c35318c0dce742" },
        { url: "/_next/static/chunks/993.e1618aa6f8563559.js", revision: "e1618aa6f8563559" },
        { url: "/_next/static/chunks/framework-4556c45dd113b893.js", revision: "4556c45dd113b893" },
        { url: "/_next/static/chunks/main-80e7aebadb092e26.js", revision: "80e7aebadb092e26" },
        { url: "/_next/static/chunks/pages/404-5cc471a4494c5735.js", revision: "5cc471a4494c5735" },
        { url: "/_next/static/chunks/pages/_app-43a0f0ccf70e96d4.js", revision: "43a0f0ccf70e96d4" },
        { url: "/_next/static/chunks/pages/_error-28b0dba9dbcfb4ed.js", revision: "28b0dba9dbcfb4ed" },
        { url: "/_next/static/chunks/pages/index-1366aa32074a5984.js", revision: "1366aa32074a5984" },
        { url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js", revision: "837c0df77fd5009c9e46d446188ecfd0" },
        { url: "/_next/static/chunks/webpack-18de51d135bdf2ed.js", revision: "18de51d135bdf2ed" },
        { url: "/_next/static/css/839441691c7d54ad.css", revision: "839441691c7d54ad" },
        { url: "/_next/static/css/a16ddba32b450853.css", revision: "a16ddba32b450853" },
        { url: "/_next/static/media/3.84ff7232.jpg", revision: "cc7ff8da4299a54f773ab2e43b837999" },
        { url: "/_next/static/media/4.e2f72a2b.jpg", revision: "e5b9c85128942bfb57baec9bd218a32d" },
        { url: "/_next/static/media/5.896a361c.png", revision: "3357754eb9577fc092d9d2292059fcb4" },
        { url: "/_next/static/media/6.16e9cc1e.png", revision: "165ec8563541cdf1a059e243944bdc2c" },
        { url: "/_next/static/media/7.5620af03.png", revision: "b03ec909f8c9c7e03f93dd60995c2991" },
        { url: "/_next/static/media/en.7415d279.svg", revision: "58a9187e7c4259d35f8b907c5818a2d4" },
        { url: "/_next/static/media/id.dc2c7bc3.svg", revision: "1ffafdbd628e909f5c928f9eca27092b" },
        { url: "/_next/static/r_3BYc8KYWC0xTYFrZxLX/_buildManifest.js", revision: "d0f91e92971b9b8226ed5d5a5008d850" },
        { url: "/_next/static/r_3BYc8KYWC0xTYFrZxLX/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" },
        { url: "/assets/images/1.jpg", revision: "3b5492bddb63f901b80cd95877da9d0a" },
        { url: "/assets/images/2.jpg", revision: "17333069fe9e48436f51c545761140de" },
        { url: "/assets/images/3.jpg", revision: "cc7ff8da4299a54f773ab2e43b837999" },
        { url: "/assets/images/4.jpg", revision: "e5b9c85128942bfb57baec9bd218a32d" },
        { url: "/assets/images/5.png", revision: "3357754eb9577fc092d9d2292059fcb4" },
        { url: "/assets/images/6.png", revision: "165ec8563541cdf1a059e243944bdc2c" },
        { url: "/assets/images/7.png", revision: "b03ec909f8c9c7e03f93dd60995c2991" },
        { url: "/assets/images/en.svg", revision: "58a9187e7c4259d35f8b907c5818a2d4" },
        { url: "/assets/images/id.svg", revision: "1ffafdbd628e909f5c928f9eca27092b" },
        { url: "/assets/images/photo1.JPG", revision: "4f237d81554f384c891d259e68663790" },
        { url: "/favicon.ico", revision: "4ff59fef4ad8bd2547e3db47bac48f20" },
        { url: "/icons/icon-128x128.png", revision: "d626cfe7c65e6e5403bcbb9d13aa5053" },
        { url: "/icons/icon-144x144.png", revision: "e53a506b62999dc7a4f8b7222f8c5add" },
        { url: "/icons/icon-152x152.png", revision: "18b3958440703a9ecd3c246a0f3f7c72" },
        { url: "/icons/icon-16x16.png", revision: "83703514f19796ee15151e450984416d" },
        { url: "/icons/icon-192x192.png", revision: "27dc12f66697a47b6a8b3ee25ba96257" },
        { url: "/icons/icon-32x32.png", revision: "25e2c6ee34840568012b32e4314278df" },
        { url: "/icons/icon-384x384.png", revision: "a40324a3fde2b0b26eeffd4f08bf8be8" },
        { url: "/icons/icon-512x512.png", revision: "93d6e8e15cfa78dfee55446f607d9a28" },
        { url: "/icons/icon-72x72.png", revision: "f2ffc41b3482888f3ae614e0dd2f6980" },
        { url: "/icons/icon-96x96.png", revision: "fba02a40f7ba6fc65be8a2f245480f6d" },
        { url: "/manifest.json", revision: "43174a254d84bd64dd5639c9f5f5f5a1" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{ cacheWillUpdate: async ({ request: e, response: s, event: c, state: i }) => (s && "opaqueredirect" === s.type ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers }) : s) }],
      }),
      "GET"
    ),
    e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({ cacheName: "google-fonts-webfonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }), "GET"),
    e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({ cacheName: "google-fonts-stylesheets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), "GET"),
    e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), "GET"),
    e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({ cacheName: "next-image", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({ cacheName: "static-audio-assets", plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({ cacheName: "static-video-assets", plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({ cacheName: "next-data", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({ cacheName: "apis", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({ cacheName: "others", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(({ url: e }) => !(self.origin === e.origin), new e.NetworkFirst({ cacheName: "cross-origin", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }), "GET");
});