import React from "react";
import { IComment } from "../comment-list/comment-list.component";

const Comment = ({ author, content, timestamp, postId, _id }: IComment) => {
  return (
    <li>
      <span>{author}</span>
      <span>{content}</span>
      <span>{timestamp.toString()}</span>
    </li>
  );
};

export default Comment;
