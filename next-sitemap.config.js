/** @type {import('next-sitemap').IConfig} */

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
      {
        userAgent: '*',
        disallow: [''],
      },
    ],
    additionalSitemaps: ['https://muti.asof.dev/sitemap-1.xml'],
  },
}
