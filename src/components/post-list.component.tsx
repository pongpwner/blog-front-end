import { useState, useEffect } from "react";
import Post from "./post.components";
import { IPost } from "../App";
import Container from "./styles/container.styles";
import { ContainerGrid } from "./styles/container.styles";
import { origin } from "../App";
const PostList = () => {
  //fetch posts
  useEffect(() => {
    async function getPosts() {
      let response = await fetch(`${origin}/posts/`, {
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
    <ContainerGrid as="ul" minWidth="15rem">
      {posts.map((post) => (
        <Post
          title={post.title}
          content={post.content}
          category={post.category}
          _id={post._id}
          published={post.published}
          timestamp={post.timestamp}
          key={post._id}
        />
      ))}
    </ContainerGrid>
  ) : (
    <Container>no posts</Container>
  );
};

export default PostList;
