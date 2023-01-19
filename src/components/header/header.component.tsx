import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
`;
const Home = styled(Link)`
  font-weight: 900;
  font-size: 3rem;
  text-decoration: none;
  color: black;
  margin: 2rem 3rem;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Home to="/">Blog</Home>
    </HeaderContainer>
  );
};

export default Header;
