/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const query = `
  {
    allSitePage {
      nodes {
        id
        component
        componentChunkName
        path
      }
    }
  }
`

const queries = [
  {
    query,
    transformer: ({ data }) => data.allSitePage.nodes,
    // optional
    indexName: 'Krzyzowka',
    // optional
    settings: {
      attributesToSnippet: ['path:5'],
    },
  },
]

module.exports = {
  siteMetadata: {
    title: `Krzyzówka`,
    author: `@gdevjam`,
    description: 'test wtf',
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    menuLinks:[
      {
        name:'portfolio',
        link:'/portfolio'
      },
      {
        name:'pracownia',
        link:'/pracowania'
      },
      {
        name:'kontakt',
        link:'/kontakt'
      },
    ]
  
  },
  
  plugins: [
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        pagesPaths: ['pages/'],
      },
    },
        `gatsby-plugin-styled-components`,
    {
      // in real life this would be:
      // resolve: 'gatsby-plugin-algolia',
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,  
    'gatsby-plugin-postcss',
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dark-mode`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
       // username: `vincebordel`,
        access_token: process.env.INSTAGRAM_TOKEN 
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jadar868ofwy`,
         downloadLocal: true,

        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
