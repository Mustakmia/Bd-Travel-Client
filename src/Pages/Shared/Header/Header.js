import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div>

      <Navbar className="nav" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav
                className="me-auto my-2 my-lg-0 text-dark fw-bold"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >

                {
                  user?.email && <Nav.Link as={Link} to="/order">
                    My Order
                  </Nav.Link>
                }
                {
                  user?.email && <Nav.Link as={Link} to="/createNewEvent">
                    Create New Event
                  </Nav.Link>
                }
                {
                  (user?.email) && <Nav.Link as={Link} to="/management">
                    Managment
                  </Nav.Link>
                }

              </Nav>
              <div>
              </div>


              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" enabled>
              Link
            </Nav.Link>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {
              (user?.email) ? <Link to="/login">
                <button onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button>Login</button>
              </Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar expand="lg" style={{ backgroundColor: 'lightblue' }}>
        <img style={{ height: '50px', width: '50px' }} src="https://image.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg" alt="" />
        <Container>

          <Navbar.Brand href="/">
            World Tour
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
              {
                user?.email && <Nav.Link as={Link} to="/order">
                  My Order
                </Nav.Link>
              }
              {
                user?.email && <Nav.Link as={Link} to="/createNewEvent">
                  Create New Event
                </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link as={Link} to="/management">
                  Managment
                </Nav.Link>
              }
             
            </Nav>
            <div>
            </div>

            {
              (user?.email) ? <Link to="/login">
                <button onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button>Login</button>
              </Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div >
  );
};

export default Header;
