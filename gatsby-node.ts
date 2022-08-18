import path from 'path';

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            id
            html
            frontmatter {
              date
              slug
              title
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  console.log(result.data);

  console.log(result.data.allMarkdownRemark);
  console.log(result.data.allMarkdownRemark.nodes);

  // Create blog articles pages.
  const articles = result.data.allMarkdownRemark.nodes;

  // const ArticleTemplate = require.resolve("./src/templates/article.tsx")

  articles.forEach((article, index) => {
    console.log('article : ', article);
    createPage({
      path: `${article.frontmatter.slug}`,
      component: path.resolve('./src/templates/article.tsx'),
      context: {
        id: article.id,
      },
    });
  });
};
