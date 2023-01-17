import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import "./App.css";
import PostPage from "./pages/post-page/post-page.component";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/posts/:postId" element={<PostPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
