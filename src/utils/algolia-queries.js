const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `pages`
const indexName = `Pages`

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/src/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter} }) {
  return {
    objectID: id,
    ...frontmatter,
 
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName
  },
]

module.exports = queries