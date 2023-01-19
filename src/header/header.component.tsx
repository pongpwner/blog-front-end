import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
`;
const Home = styled.a`
  font-weight: 900;
  font-size: 3rem;
  text-decoration: none;
  color: black;
  margin: 2rem;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Home href="/">Blog</Home>
    </HeaderContainer>
  );
};

export default Header;
