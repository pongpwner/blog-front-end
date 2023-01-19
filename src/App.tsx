import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import "./App.css";
import PostPage from "./pages/post-page/post-page.component";
import GlobalStyle from "./global.styles";
import Header from "./components/header/header.component";

export interface IPost {
  _id: string;
  title: string;
  content: string;
  timestamp: Date;
  published: boolean;
}
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/posts/:postId" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
