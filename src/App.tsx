import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from "./components/styles/global.styled";
import HomePage from "./pages/home-page/home-page.component";
import PostPage from "./pages/post-page/post-page.component";
import styled from "styled-components";
import Header from "./components/header.component";
//https://blog-api-production-9a5f.up.railway.app
//http://localhost:5000
//https://blog-api-g6ib.onrender.com

export const origin = "https://blog-api-g6ib.onrender.com";
export interface IPost {
  _id: string;
  title: string;
  content: string;
  category: string | undefined;
  timestamp: Date;
  published: boolean;
}
const AppContainer = styled.div`
  margin-top: 60px;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Global></Global>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/posts/:postId" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
