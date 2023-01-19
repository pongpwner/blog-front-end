import React from "react";
import { IPost } from "../../App";
import { Link } from "react-router-dom";
import { ContainerFlexCol } from "../container/container.styles";
import styled from "styled-components";

const Li = styled.li`
  border: 1px solid black;
  margin: 1rem 3rem;
  padding: 1rem;
  min-width: 15rem;
`;
const Content = styled.p`
  margin: 1rem 0;
  overflow-wrap: break-word;
`;

const ViewPost = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: black;
  :hover {
    color: purple;
  }
`;
const Post = ({ title, content, timestamp, published, _id }: IPost) => {
  return (
    <Li>
      <ContainerFlexCol minWidth="15rem">
        <h1>{title}</h1>
        <Content>
          {`${content.substring(0, 50)}  ${content.length > 50 ? "..." : ""}`}
        </Content>
        <span>
          {new Date(timestamp).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>

        <ViewPost to={`/posts/${_id}`}>View Post</ViewPost>
      </ContainerFlexCol>
    </Li>
  );
};

export default Post;
