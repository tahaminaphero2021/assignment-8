import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hire Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#pricing">Starting</Nav.Link>
              <NavDropdown title="Group of Membership" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">CEO</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                      General Assistance
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Senior Manager
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Junior Assistance
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button type="search" variant="outline-success">Search</Button>
      </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
