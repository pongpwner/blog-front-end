import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import FocusedPost from "../../components/focused-post/focused-post.component";
import CommentForm from "../../components/comment-form/comment-form.component";
import CommentList from "../../components/comment-list/comment-list.component";
const PostPage = () => {
  const postId = useParams();
  return (
    <div>
      <FocusedPost postId={postId}></FocusedPost>
      <CommentForm postId={postId}></CommentForm>
      <CommentList postId={postId}></CommentList>
    </div>
  );
};

export default PostPage;
