import React, { useState } from "react";
import { Params } from "react-router";
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
      `http://localhost:5000/posts/${postId.postId}/comments`,
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
  }
  return (
    <form action="http://localhost:5000/" onSubmit={postComment} method="GET">
      <label htmlFor="author">name:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={author}
        onChange={handleChange}
      />
      <textarea
        name="content"
        id=""
        cols={30}
        rows={10}
        value={content}
        placeholder="leave a comment"
        onChange={handleChange}
      ></textarea>
      <button type="submit">post comment</button>
    </form>
  );
};

export default CommentForm;
