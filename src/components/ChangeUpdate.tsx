import React from "react";
import styled from "styled-components";
import Contents from "../components/Contents";

interface Props {
  index: number;
  post: IPost;
  contentItems: any[];
  refs: any[];
}
interface IPostMeta {
  date: string;
  title: string;
}

interface IPost {
  excerpt: string;
  html: string;
  frontmatter: IPostMeta;
}

const ChangeContainer = styled.div`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 250px 1fr;
`;

const ChangeBlurbContainer = styled.div``;

const HeadingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
`;

const AuthorContainer = styled.div``;

const PostTitle = styled.h1`
  font-size: 2.8rem;
  line-height: 3rem;
`;

const Nav = styled.div`
  div {
    position: sticky;
    top: 120px;
  }
`;

const AvatarContainer = styled.div`
  background: white;
  width: fit-content;
  margin: 0 auto;
  border-radius: 100%;
  display: grid;
  place-items: center;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  img {
    max-width: 100px;
    min-width: 50px;
    height: auto;
  }
`;

const ChangeUpdate: React.FC<Props> = ({ post, contentItems, refs, index }) => {
  if (!contentItems || !post) {
    return <div>Loading...</div>;
  }
  return (
    <ChangeContainer>
      <Nav>
        <div>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <Contents
            title={post.frontmatter.title}
            contentItems={contentItems}
            refs={refs}
          />
        </div>
      </Nav>
      <div>
        <HeadingContainer>
          <div>
            <p>
              By <strong>Vouch Dev Team</strong>
            </p>
            <p>
              Published: <strong>{post.frontmatter.date}</strong>
            </p>
          </div>
          <AuthorContainer>
            <AvatarContainer>
              <img src="/assets/vouch-house.svg" />
            </AvatarContainer>
          </AuthorContainer>
        </HeadingContainer>
        <ChangeBlurbContainer
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></ChangeBlurbContainer>
      </div>
    </ChangeContainer>
  );
};

export default ChangeUpdate;
