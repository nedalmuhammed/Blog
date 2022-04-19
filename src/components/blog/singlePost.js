import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../layout/loader";
import axios from "axios";
import Head from "./head";
export class singlePost extends Component {
  state = {
    post: null,
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    const postId = this.props.match.params.id
      ? this.props.match.params.id
      : null;
    if (postId) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + postId)
        .then((res) => {
          console.log(res.data);
          this.setState({ post: res.data });
        });
    }
  }
  renderPost = () => {
    if (this.state.post) {
      return (
        <>
          <Head title={this.state.post.title} />
          <Container>
            <Row>
              <Col>
                <p>{this.state.post.body}</p>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return <Loader />;
    }
  };
  render() {
    return <> {this.renderPost()} </>;
  }
}
export default singlePost;