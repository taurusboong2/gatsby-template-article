import React from 'react';
import { graphql, PageProps } from 'gatsby';
import DetailContent from '@/components/DetailContent';
import Footer from '@/components/Footer';
import { Article } from '@/types/articles';

type Props = PageProps<{ article: Article }>;

const ArticlePage = (props: Props) => {
  const { article } = props.data;

  return (
    <>
      <DetailContent article={article} />
      <Footer />
    </>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query ($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        description
        category
        author
        author_thumbnail {
          publicURL
          name
        }
        author_description
        thumbnail {
          publicURL
          name
        }
      }
    }
  }
`;
