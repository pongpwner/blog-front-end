import React, { useState, useEffect } from "react";
import Post from "../post/post.components";
import { IPost } from "../../App";
import Container from "../container/container.styles";
import styled from "styled-components";

const PostList = () => {
  //fetch posts
  useEffect(() => {
    console.log(1);
    async function getPosts() {
      //https://blog-api-production-9a5f.up.railway.app/posts/posts
      //http://localhost:5000/posts/posts
      let response = await fetch(
        "https://blog-api-production-9a5f.up.railway.app/posts/",
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(2);
      let data = await response.json();
      console.log(data);

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
