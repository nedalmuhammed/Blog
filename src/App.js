import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/home";
import Blog from "./views/blog";
import Post from "./views/post";
import AddPost from "./views/addPost";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/posts/add-post" component={AddPost} />

          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
export default App;