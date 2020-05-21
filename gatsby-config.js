module.exports = {
  siteMetadata: {
    title: `Magsu.art`,
    lang: `en`,
    description: `Freelance Creative & Professional Digital artist.`,
    siteUrl: `https://magsu.art`,
    keywords: ['magsu.art', 'Digital artist', '3D', 'VFX', 'Animation', 'Video']
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
    /*{
      resolve: 'gatsby-background-image-es5',
      options: {
        specialChars: '/:',
      },
    },*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Magsu.art`,
        short_name: `Magsu.art`,
        start_url: `/`,
        background_color: `#ED0C88`,
        theme_color: `#ED0C88`,
        display: `standalone`,
        icon: `src/images/magsuart-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-remove-console`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    /*{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },*/
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
