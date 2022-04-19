import React from "react";
import { Route } from "react-router-dom";
import Head from "../components/blog/head";
import Home from "../components/home";
import Blog from "./blog";
const home = () => {
  return (
    <div>
      <Head />
      <Route path="/" exact component={Home} />
      <Route path="/blog" component={Blog} />
    </div>
  );
};
export default home;