import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import FocusedPost from "../../components/focused-post.component";
import CommentForm from "../../components/comment-form.component";
import CommentList from "../../components/comment-list.component";
import styled from "styled-components";
import COLORS from "../../components/styles/colors";
const { primary1, primary2 } = COLORS;
import Container, {
  BorderContainer,
} from "../../components/styles/container.styles";
const Seperator = styled.hr`
  max-width: 70rem;
  margin: 1rem auto;
`;
const PostPage = () => {
  const postId = useParams();
  return (
    <Container>
      <FocusedPost postId={postId}></FocusedPost>
      <Seperator />
      <BorderContainer
        minWidth="15rem"
        maxWidth="70rem"
        backgroundColor={primary2}
      >
        <h2>Comments</h2>
        <CommentForm postId={postId}></CommentForm>
        <CommentList postId={postId}></CommentList>
      </BorderContainer>
    </Container>
  );
};

export default PostPage;
