import { BrowserRouter, Routes, Route } from "react-router-dom";
import Global from "./components/styles/global.styled";
import HomePage from "./pages/home-page/home-page.component";
import "./App.css";
import PostPage from "./pages/post-page/post-page.component";

import Header from "./components/header.component";
//https://blog-api-production-9a5f.up.railway.app
export const origin = "http://localhost:5000";
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
        <Global></Global>
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
