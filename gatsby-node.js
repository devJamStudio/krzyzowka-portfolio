const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/portfolio-single.js');
  const tagTemplate = path.resolve('./src/templates/tag-template.js');

  const result = await graphql(`
    {
      allContentfulPortfolio {
        nodes {
          title
          slug
          tags
        }
        distinct(field: {tags: SELECT})     
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your Contentful posts`, result.errors);
    return;
  }

  const posts = result.data.allContentfulPortfolio.nodes;
  const tags = result.data.allContentfulPortfolio.distinct;

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug;
      const nextPostSlug = index === posts.length - 1 ? null : posts[index + 1].slug;

      createPage({
        path: `/portfolio-test/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      });
    });
  }

  // Create tags pages
  if (tags.length > 0) {
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag: tag,
        },
      });
    });
  }
};
// gatsby-node.js

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type ContentfulOffer implements Node {
      tab1Header: String
      tab1List: [String]
      tab1Price: String
      tab2Header: String
      tab2List: [String]
      tab2Price: Float  # Updated to use a number type
      tab3Header: String
      tab3List: [String]
      tab3Price: Float  # Updated to use a number type
      description: ContentfulOfferDescription
      name: String
      price: String
    }

    type ContentfulOfferDescription {
      description: String
    }
  `;

  createTypes(typeDefs);
};
