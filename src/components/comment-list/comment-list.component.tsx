import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { Params } from "react-router";
import Comment from "../comment/comment.component";
export interface IComment {
  _id?: string;
  author: string;
  content: string;
  timestamp: Date;
  postId: string;
}
interface ICommentListProps {
  readonly postId: Readonly<Params<string>>;
}

const CommentList = ({ postId }: ICommentListProps) => {
  const [commentList, setCommentList] = useState<[IComment] | null>(null);

  useEffect(() => {
    async function getComments() {
      let response = await fetch(
        `http://localhost:5000/posts/${postId.postId}/comments/`,
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
      setCommentList(data.comments);
    }
    getComments();
  }, []);
  return commentList ? (
    <ul>
      {commentList.map((comment) => (
        <Comment
          author={comment.author}
          content={comment.content}
          timestamp={comment.timestamp}
          postId={comment.postId}
          _id={comment._id}
        />
      ))}
    </ul>
  ) : (
    <div>there are no comments</div>
  );
};

export default CommentList;
