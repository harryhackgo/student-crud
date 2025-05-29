import React, { lazy } from "react";
import { Link, useRoutes } from "react-router-dom";
// import Home from './pages/Home'
// import About from './pages/About'
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Comment = lazy(() => import("./pages/Comment"));

const App = () => {
  return (
    <>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/comment"}>Comment</Link>
      {useRoutes([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/comment", element: <Comment /> },
      ])}
    </>
  );
};

export default React.memo(App);
