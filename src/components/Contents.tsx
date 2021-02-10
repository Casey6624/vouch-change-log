import React from "react";
import styled from "styled-components";

interface Props {
  contentItems: any[];
  refs: any[]; // match up to the contentItems
  title: string;
}

const ContentsContainer = styled.div``;

const ContentItem = styled.div<{ hide: boolean }>`
  display: ${(props) => (props.hide ? "none" : "")};
`;

export default function Contents({ contentItems, refs, title }: Props) {
  console.log(contentItems);
  return (
    <ContentsContainer>
      {contentItems.map(({ node }, index) => (
        <ContentItem
          hide={title === node.frontmatter.title}
          onClick={() => refs[index].current.scrollIntoView()}
        >
          <h4>{node.frontmatter.title}</h4>
        </ContentItem>
      ))}
    </ContentsContainer>
  );
}
