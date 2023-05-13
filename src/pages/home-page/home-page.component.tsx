import React from "react";
import { HomePageContainer } from "./home-page.styled";
import { H1 } from "../../components/styles/general.styled";
import PostList from "../../components/post-list.component";
const HomePage = () => {
  return (
    <HomePageContainer>
      <H1>New Posts </H1>
      <PostList></PostList>
    </HomePageContainer>
  );
};

export default HomePage;
