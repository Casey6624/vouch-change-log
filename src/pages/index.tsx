import * as React from "react";
import "./defaults.css";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";
// components
import Header from "../components/Header";
import ChangeUpdate from "../components/ChangeUpdate";
import PageWrapper from "../components/PageWrapper";
import FullWidthHeader from "../components/FullWidthHeader";
interface DataProps {
  allMarkdownRemark: any;
}
interface IndexPageProps extends PageProps {
  data: DataProps;
}

const IndexPageBlurb = styled.div`
  max-width: 900px;
  margin: 0 auto;
  grid-gap: 10px;
  padding: 10px;
`;
const ChangeContainer = styled.div``;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const [refs, setRefs] = React.useState([]);
  const {
    allMarkdownRemark: { edges: posts },
  } = data;
  React.useEffect(() => {
    setRefs((elRefs: any) =>
      Array(posts.length)
        .fill(Array(posts.length))
        .map((_, i) => elRefs[i] || React.createRef())
    );
  }, [posts]);

  return (
    <PageWrapper>
      <Header />
      <FullWidthHeader
        title="change log."
        subtitle="take a look at what we have been busy with ✨"
      />

      <IndexPageBlurb>
        <ChangeContainer>
          {posts.map(({ node: post }, index) => (
            <ChangeUpdate
              post={post}
              index={index}
              ref={refs[index]}
              contentItems={posts}
              refs={refs}
            ></ChangeUpdate>
          ))}
        </ChangeContainer>
      </IndexPageBlurb>
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
