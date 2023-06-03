/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Krzyzówka`,
    author: `@gdevjam`,
    description: 'test wtf',
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    menuLinks: [
      {
        name: 'portfolio',
        link: '/portfolio'
      },
      {
        name: 'pracownia',
        link: '/pracowania'
      },
      {
        name: 'kontakt',
        link: '/kontakt'
      },
    ]
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-provide-react',
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },{
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      }
 }
 ,
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};
