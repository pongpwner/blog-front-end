import React, { useEffect, useState } from "react";
import { IPost } from "../../App";
import { Params } from "react-router";
import styled from "styled-components";
import Container from "../container/container.styles";

const Content = styled.p`
  margin: 2rem;
  text-align: start;
  overflow-wrap: break-word;
`;
interface IFocusedPostProps {
  readonly postId: Readonly<Params<string>>;
}

const FocusedPost = ({ postId }: IFocusedPostProps) => {
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);
  useEffect(() => {
    async function getPost() {
      let response = await fetch(
        `https://blog-api-production-9a5f.up.railway.app/posts/${postId.postId}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();

      setCurrentPost(data.post);
    }
    getPost();
  }, []);
  return currentPost ? (
    <Container minWidth="15rem" maxWidth="70rem">
      <h1>{currentPost.title}</h1>
      <span>
        {new Date(currentPost.timestamp).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>

      <Content>{currentPost.content}</Content>
    </Container>
  ) : (
    <Container>This post does not exist</Container>
  );
};

export default FocusedPost;
