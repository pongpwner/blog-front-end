import { IPost } from "../App";
import { ContainerFlexCol } from "./styles/container.styles";
import { Li, Content, ViewPost } from "./styles/post.styled";

const Post = ({
  title,
  content,
  category,
  timestamp,
  published,
  _id,
}: IPost) => {
  function getFirstParagraph() {
    if (content) {
      let split1 = content.split("<p>");
      let split2 = split1[1].split("</p>");
      return split2[0];
    }
  }
  const firstParagraph = getFirstParagraph();
  return (
    <Li>
      <ContainerFlexCol minWidth="15rem" backgroundColor="#3B3B3B">
        <h1>{title}</h1>
        {
          <Content>
            {firstParagraph
              ? `${firstParagraph.substring(0, 100)}  ${
                  firstParagraph.length > 100 ? "..." : ""
                }`
              : ""}
          </Content>
        }
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
