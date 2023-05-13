import { useEffect, useState } from "react";
import { IPost } from "../App";
import { Params } from "react-router";
import { origin } from "../App";
import Container from "./styles/container.styles";
import { Content } from "./styles/focused-post.styled";
import parse from "html-react-parser";
import COLORS from "./styles/colors";
const { primary1, primary2 } = COLORS;
interface IFocusedPostProps {
  readonly postId: Readonly<Params<string>>;
}

const FocusedPost = ({ postId }: IFocusedPostProps) => {
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);
  useEffect(() => {
    async function getPost() {
      let response = await fetch(`${origin}/posts/${postId.postId}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();

      setCurrentPost(data.post);
    }
    getPost();
  }, []);
  return currentPost ? (
    <Container minWidth="15rem" maxWidth="70rem" backgroundColor={primary2}>
      <h1>{currentPost.title}</h1>
      <span>
        {new Date(currentPost.timestamp).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>

      <Content>{parse(currentPost.content)}</Content>
    </Container>
  ) : (
    <Container>This post does not exist</Container>
  );
};

export default FocusedPost;
