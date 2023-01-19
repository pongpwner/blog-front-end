import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import FocusedPost from "../../components/focused-post/focused-post.component";
import CommentForm from "../../components/comment-form/comment-form.component";
import CommentList from "../../components/comment-list/comment-list.component";
import styled from "styled-components";
import Container from "../../components/container/container.styles";
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
      <h2>Comments</h2>
      <CommentForm postId={postId}></CommentForm>
      <CommentList postId={postId}></CommentList>
    </Container>
  );
};

export default PostPage;
