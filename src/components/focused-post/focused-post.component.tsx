import React, { useEffect, useState } from "react";
import { IPost } from "../../App";
import { Params } from "react-router";
import { convertTypeAcquisitionFromJson } from "typescript";
interface IFocusedPostProps {
  readonly postId: Readonly<Params<string>>;
}

const FocusedPost = ({ postId }: IFocusedPostProps) => {
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);
  useEffect(() => {
    console.log(postId);
    async function getPost() {
      let response = await fetch(
        `http://localhost:5000/posts/${postId.postId}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      console.log(data);
      setCurrentPost(data.post);
    }
    getPost();
  }, []);
  return currentPost ? (
    <div>
      <h1>{currentPost.title}</h1>
      <span>{currentPost.timestamp.toString()}</span>
      <section>
        <p>{currentPost.content}</p>
      </section>
    </div>
  ) : (
    <div>This post does not exist</div>
  );
};

export default FocusedPost;
