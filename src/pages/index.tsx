import * as React from "react";
import "./defaults.css";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
// components
import ChangeUpdate from "../components/ChangeUpdate";

const PageWrapper = styled.div``;

interface DataProps {
  allMarkdownRemark: any;
}
interface IndexPageProps extends PageProps {
  data: DataProps;
}
const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log("data!", data);
  const {
    allMarkdownRemark: { edges: posts },
  } = data;
  return (
    <PageWrapper>
      {posts.map(({ node: post }, index) => (
        <ChangeUpdate post={post} index={index} />
      ))}
    </PageWrapper>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
          excerpt
        }
      }
    }
  }
`;
