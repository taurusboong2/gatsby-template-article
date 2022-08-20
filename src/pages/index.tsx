import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Article } from '../types/articles';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';

type Props = PageProps<{ articles: { nodes: Article[] } }>;

const Home = (props: Props) => {
  const articles = props.data.articles.nodes;

  return (
    <>
      <ArticleList articles={articles} />
      <Footer />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    articles: allMarkdownRemark {
      nodes {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          tags
          description
          category
          writer
          thumbnail {
            publicURL
            name
          }
        }
      }
    }
  }
`;
