import { P, Author, Li, Time } from "./styles/comment.styled";
import { FlexCol } from "./styles/flex.styled";

export interface IComment {
  _id?: string;
  author: string;
  content: string;
  timestamp: Date;
  postId: string;
}
const Comment = ({ author, content, timestamp, postId, _id }: IComment) => {
  return (
    <Li>
      <FlexCol>
        <Author>{author}</Author>
        <P>{content}</P>
        <Time>
          {new Date(timestamp).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Time>
      </FlexCol>
    </Li>
  );
};
export default Comment;
