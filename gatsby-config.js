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
        policy: [{ userAgent: '*', allow: '/', disallow: "/images/background" }]
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
        background_color: `#663399`, // mettre le violet du logo youtube
        theme_color: `#663399`, // mettre le violet du logo youtube
        display: `standalone`,
        icon: `src/images/magsuart-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-remove-console`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
  ],
}
