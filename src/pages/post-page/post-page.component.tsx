import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import FocusedPost from "../../components/focused-post/focused-post.component";
const PostPage = () => {
  const postId = useParams();
  return (
    <div>
      <FocusedPost postId={postId}></FocusedPost>
    </div>
  );
};

export default PostPage;
