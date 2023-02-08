import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { Params } from "react-router";
import Comment from "../comment/comment.component";
import styled from "styled-components";

const ListContainer = styled.ul`
  min-width: "15rem";
  max-width: 50rem;
  margin: 0 auto;
`;
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
        `https://blog-api-production-9a5f.up.railway.app/posts/${postId.postId}/comments/`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();

      setCommentList(data.comments);
    }
    getComments();
  }, []);
  return commentList ? (
    <ListContainer>
      {commentList
        .slice(0)
        .reverse()
        .map((comment) => (
          <Comment
            author={comment.author}
            content={comment.content}
            timestamp={comment.timestamp}
            postId={comment.postId}
            _id={comment._id}
          />
        ))}
    </ListContainer>
  ) : (
    <div>there are no comments</div>
  );
};

export default CommentList;
