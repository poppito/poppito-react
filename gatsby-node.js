const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allMdx.edges.forEach(({ node }) => {
    const {
      frontmatter: { slug },
    } = node;

    createPage({
      path: `/${slug}`,
      component: path.resolve(`./src/blog/${slug}.mdx`),
      context: { id: node.id },
    });
  });
};