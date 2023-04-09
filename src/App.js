import "./App.css";
import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <Header>
        {/*this is come from "Header.js"*/}
        <Header />
      </Header>

      <main>
        <Routes>
          {" "}
          {/* set routes to all pages */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myBlogs" element={<UserBlog />} />
          <Route path="/myBlogs/:id" element={<BlogDetails />} />
          <Route path="/blogs/addblog" element={<AddBlog />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
