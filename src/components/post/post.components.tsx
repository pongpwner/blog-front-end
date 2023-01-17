import React from "react";
import { IPost } from "../../App";
import { Link } from "react-router-dom";

const Post = ({ title, content, timestamp, published, _id }: IPost) => {
  return (
    <li>
      <Link to={`/posts/${_id}`}>
        <h1>{title}</h1>
        <span>{timestamp.toString()}</span>
      </Link>
    </li>
  );
};

export default Post;
