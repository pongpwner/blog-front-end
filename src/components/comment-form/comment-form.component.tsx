import React, { useState } from "react";
import { Params } from "react-router";
import styled from "styled-components";

const Form = styled.form`
  margin: 1rem auto;
  width: 30rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
interface ICommentFormProps {
  readonly postId: Readonly<Params<string>>;
}

const CommentForm = ({ postId }: ICommentFormProps) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    if (e.target.name === "author") {
      setAuthor(e.target.value);
    }
    if (e.target.name === "content") {
      setContent(e.target.value);
    }
  }
  async function postComment(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    let response = await fetch(
      `https://blog-api-production-9a5f.up.railway.app/posts/${postId.postId}/comments`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: author,
          content: content,
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    window.location.reload();
  }
  return (
    <Form
      action="https://blog-api-production-9a5f.up.railway.app"
      onSubmit={postComment}
      method="GET"
    >
      <input
        type="text"
        id="author"
        name="author"
        value={author}
        onChange={handleChange}
        placeholder="name"
      />
      <textarea
        name="content"
        id=""
        cols={50}
        rows={5}
        value={content}
        placeholder="leave a comment"
        onChange={handleChange}
      ></textarea>
      <button type="submit">post comment</button>
    </Form>
  );
};

export default CommentForm;
