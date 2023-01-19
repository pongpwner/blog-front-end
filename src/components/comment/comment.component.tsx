import React from "react";
import { IComment } from "../comment-list/comment-list.component";
import { ContainerFlexCol } from "../container/container.styles";
import styled from "styled-components";

const P = styled.p`
  overflow-wrap: break-word;
`;
const Author = styled.span`
  font-weight: 700;
`;
const Li = styled.li`
  margin: 2rem 3rem;
`;
const Time = styled.span`
  font-style: italic;
`;
const Comment = ({ author, content, timestamp, postId, _id }: IComment) => {
  return (
    <Li>
      <ContainerFlexCol>
        <Author>{author}</Author>
        <P>{content}</P>
        <Time>
          {new Date(timestamp).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Time>
      </ContainerFlexCol>
    </Li>
  );
};

export default Comment;
