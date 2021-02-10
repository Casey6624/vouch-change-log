import * as React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";

const PageWrapper = styled.div``;
// markup
const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log("data!", data);
  return (
    <PageWrapper>
      <h1>Vouch</h1>
      <h5>Change Log</h5>
    </PageWrapper>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    markdownRemark {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
