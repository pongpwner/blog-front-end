import { useState, useEffect } from "react";
import { Params } from "react-router";
import Comment from "./comment.component";
import { origin } from "../App";
import { ListContainer } from "./styles/comment-list.styled";

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
      let response = await fetch(`${origin}/posts/${postId.postId}/comments/`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
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
