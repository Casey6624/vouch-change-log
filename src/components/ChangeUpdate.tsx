import React from "react";
import styled from "styled-components";

interface Props {
  index: number;
  post: IPost;
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

const ChangeContainer = styled.div``;

const ChangeBlurbContainer = styled.div``;

const ChangeUpdate: React.FC<Props> = ({ post }) => {
  return (
    <ChangeContainer>
      <h1>{post.frontmatter.title}</h1>
      <div>
        <p>{post.frontmatter.date}</p>
        <p>By the Vouch Dev Team</p>
      </div>
      <ChangeBlurbContainer
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></ChangeBlurbContainer>
    </ChangeContainer>
  );
};

export default ChangeUpdate;
