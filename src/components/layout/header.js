import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
const header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to={{
                pathname: "/blog",
                hash: "#star",
                search: "?page=1&sort=top",
              }}
            >
              Blog
            </NavLink>
            <NavLink className="nav-link" to="/posts/add-post">
              Add Post
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default header;