import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 6rem;
`;
export const Home = styled(Link)`
  font-weight: 900;
  font-size: 3rem;
  text-decoration: none;
  color: #f7f7f7;
  margin: 2rem 3rem;
`;
