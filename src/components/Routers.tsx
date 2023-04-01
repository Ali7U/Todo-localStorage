import React from "react";
import Nav from "./Nav";
import Post from "./Post";
import { Route, Routes } from "react-router-dom";
import Effect from "./Effect";

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Effect/>}/>
        <Route path="/postTask" element={<Post />} />
      </Routes>
      
    </>
  );
}

export default Router;
