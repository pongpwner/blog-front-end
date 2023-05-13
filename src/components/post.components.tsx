import { IPost } from "../App";
import { ContainerFlexCol } from "./styles/container.styles";
import { Li, Content, ViewPost } from "./styles/post.styled";
import parse from "html-react-parser";
const Post = ({
  title,
  content,
  category,
  timestamp,
  published,
  _id,
}: IPost) => {
  return (
    <Li>
      <ContainerFlexCol minWidth="15rem" backgroundColor="#3B3B3B">
        <h1>{title}</h1>
        {/* <Content>
          {`${content}  ${
            content.length > 50 ? "..." : ""
          }`}
        </Content> */}
        <span>Category: {category}</span>
        <span>
          {new Date(timestamp).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>

        <ViewPost to={`/posts/${_id}`}>View Post</ViewPost>
      </ContainerFlexCol>
    </Li>
  );
};

export default Post;
