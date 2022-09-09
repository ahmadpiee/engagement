module.exports = {
  siteUrl: 'https://muti.asof.dev',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: ['/'],
      },
      //   {
      //     userAgent: "*",
      //     disallow: ["/admin"],
      //   },
    ],
  },
}
