import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Head from "../components/blog/head";
import Posts from "../components/blog/posts";

const blog = () => {
  return (
    <div>
      <Header />
      <Head />
      <Posts />
      <Footer />
    </div>
  );
};
export default blog;