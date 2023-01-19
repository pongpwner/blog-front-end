import React, { useState, useEffect } from "react";
import Post from "../post/post.components";
import { IPost } from "../../App";
import Container from "../container/container.styles";
import styled from "styled-components";

const PostList = () => {
  //fetch posts
  useEffect(() => {
    async function getPosts() {
      let response = await fetch("http://localhost:5000/posts", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();

      if (data.posts.length > 0) {
        let publishedPosts = data.posts.filter(
          (post: IPost) => post.published === true
        );
        setPosts(publishedPosts);
      }
    }
    getPosts();
  }, []);

  const [posts, setPosts] = useState<[IPost]>();
  return posts ? (
    <Container as="ul" minWidth="15rem">
      {posts.map((post) => (
        <Post
          title={post.title}
          content={post.content}
          _id={post._id}
          published={post.published}
          timestamp={post.timestamp}
          key={post._id}
        />
      ))}
    </Container>
  ) : (
    <Container>no posts</Container>
  );
};

export default PostList;
