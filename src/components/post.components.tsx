import { IPost } from "../App";
import { ContainerFlexCol } from "./styles/container.styles";
import { Li, Content, ViewPost } from "./styles/post.styled";

const Post = ({ title, content, timestamp, published, _id }: IPost) => {
  return (
    <Li>
      <ContainerFlexCol minWidth="15rem">
        <h1>{title}</h1>
        <Content>
          {`${content.substring(0, 50)}  ${content.length > 50 ? "..." : ""}`}
        </Content>
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
