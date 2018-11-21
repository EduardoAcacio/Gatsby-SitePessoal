module.exports = {
  siteMetadata: {
    title: 'Eduardo Acacio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Eduardo Acacio',
        short_name: 'Eduardo Acacio',
        start_url: '/',
        background_color: '#202021',
        theme_color: '#303030',
        display: 'minimal-ui',
        icon: 'src/images/512.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
