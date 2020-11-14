import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

const AdminNavBar = (props) => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link style={navStyle} to="/adminHome">
            <Nav.Link href="#home">HOME</Nav.Link>
          </Link>
          <Link style={navStyle} to="/adminReports">
            <Nav.Link href="#link">REPORTS</Nav.Link>
          </Link>
          {/* <Link style={navStyle} to="/report">
            <Nav.Link href="#link">lol</Nav.Link>
          </Link> */}
         
        </Nav>
        {/* <Form className="Navbar-form">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 searchbar"
          />
          <Button className="searchBtn_custom" variant="outline-success">
            Search
          </Button>
        </Form> */}
        <span class="navbar-text">{props.hello}</span>
        <Link style={navStyle} to="/">
              <Nav.Link href="#link">LOGOUT</Nav.Link>
        </Link>
       
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNavBar;
