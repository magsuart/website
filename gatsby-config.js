module.exports = {
  pathPrefix: `/website`,
  siteMetadata: {
    title: `Magsu.art`,
    lang: `en`,
    description: `Freelance Creative & Professional Digital artist.`,
    siteUrl: `https://magsu.art`,
    keywords: ['magsu.art', 'Digital artist', '3D', 'VFX', 'Animation', 'Video', 'Photography', 'Illustration']
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/', disallow: "/public" }]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Magsu.art`,
        short_name: `Magsu.art`,
        start_url: `/`,
        background_color: `#ED0C88`,
        theme_color: `#ED0C88`,
        display: `standalone`,
        icon: `src/images/magsuart-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-remove-console`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
}
