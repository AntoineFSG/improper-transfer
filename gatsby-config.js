module.exports = {
  siteMetadata: {
    title: `Improper Design`,
    description: ` The work of Ian .`,
    author: `A&A`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
    resolve: `gatsby-source-wordpress`,
    options: {
      /*
       * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
       * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
       */
      baseUrl: `https://a-roy.me/gatsby/wordpress`,
      protocol: `http`,
      hostingWPCOM: false,
      useACF: true,
    }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Improper Design`,
        short_name: `improper_design`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
