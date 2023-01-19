import React from "react";
import { IPost } from "../../App";
import { Link } from "react-router-dom";
import { ContainerFlexCol } from "../container/container.styles";
import styled from "styled-components";

const Li = styled.li`
  border: 1px solid black;
  margin: 1rem 3rem;
`;
const Post = ({ title, content, timestamp, published, _id }: IPost) => {
  return (
    <Li>
      <ContainerFlexCol>
        <h1>{title}</h1>
        <span>{content.substring(0, 50) + "..."}</span>
        <span>{timestamp.toString()}</span>

        <Link to={`/posts/${_id}`}>View Post</Link>
      </ContainerFlexCol>
    </Li>
  );
};

export default Post;
