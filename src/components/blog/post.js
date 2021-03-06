import React from "react";
import { Card, Button } from "react-bootstrap";
import defaultImg from "../../assets/images/default.jpg";
const post = (props) => {
  const openPostHandler = () => {
    props.history.push("/posts/" + props.post.id);
  };
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img variant="top" src={defaultImg} />
      <Card.Body>
        <Card.Title> {props.post.title}</Card.Title>
        <Card.Text>{props.post.body}</Card.Text>
        <Button variant="primary" onClick={openPostHandler}>
          open Post
        </Button>
      </Card.Body>
    </Card>
  );
};
export default post;