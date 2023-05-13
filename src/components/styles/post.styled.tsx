import styled from "styled-components";
import { Link } from "react-router-dom";
import COLORS from "./colors";
const { primary1, primary2 } = COLORS;
export const Li = styled.li`
  border: 1px solid black;
  margin: 1rem 3rem;
  padding: 1rem;
  min-width: 15rem;
  background-color: ${primary2};
`;
export const Content = styled.p`
  margin: 1rem 0;
  overflow-wrap: break-word;
`;

export const ViewPost = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: #f7f7f7;
  :hover {
    color: purple;
  }
`;
