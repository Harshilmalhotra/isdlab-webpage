/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://isdlabsrm.in",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    {
      loc: "https://www.linkedin.com/company/isd-lab-srm",
      changefreq: "monthly",
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "https://www.instagram.com/isdlabsrm/",
      changefreq: "monthly",
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "https://www.instagram.com/robofest.srm/",
      changefreq: "monthly",
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "https://maps.app.goo.gl/6Lzg572KA3eG47XBA",
      changefreq: "yearly",
      priority: 0.3,
      lastmod: new Date().toISOString(),
    },
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/maintainence"], // block maintenance page
      },
    ],
    additionalSitemaps: [
      "https://isdlabsrm.in/sitemap-0.xml",
    ],
    // Extra brand authority links for robots.txt
    additionalUrls: [
      "https://www.linkedin.com/company/isd-lab-srm",
      "https://www.instagram.com/isdlabsrm/",
      "https://www.instagram.com/robofest.srm/",
      "https://maps.app.goo.gl/6Lzg572KA3eG47XBA",
    ],
  },
};
