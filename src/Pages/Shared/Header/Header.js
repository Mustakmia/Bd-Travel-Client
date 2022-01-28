import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div>

      <Navbar className="nav" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-light" href="#">Bd Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="text-light" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/explore">
                Explore
              </Nav.Link>
              <Nav
                className="me-auto my-2 my-lg-0 text-light fw-bold"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >

                {
                  user?.email && <Nav.Link className="text-light" as={Link} to="/order">
                    My Order
                  </Nav.Link>
                }
                {
                  user?.email && <Nav.Link className="text-light" as={Link} to="/createNewEvent">
                    Create New Event
                  </Nav.Link>
                }
                {
                  (user?.email) && <Nav.Link className="text-light" as={Link} to="/management">
                    Managment
                  </Nav.Link>
                }

              </Nav>
              <div>
              </div>


              <Nav.Link className="text-light" as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/all Packages">All Packages</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/more facilities">More Facilities</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/galarry">
                Galarry
              </NavDropdown.Item>
            </NavDropdown>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>          {
              (user?.email) ? <Link to="/login">
                <button onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button>Login</button>
              </Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default Header;
