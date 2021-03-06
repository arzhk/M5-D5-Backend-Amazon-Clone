import React from "react";
import { Navbar, Nav, Form, FormControl, Col, InputGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

function NavBar() {
  const [searchInput, setSearchInput] = React.useState("");
  const history = createBrowserHistory();

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const submitSearchHandler = (event) => {
    if (event.keyCode === 13) {
      if (searchInput === "admin") {
        history.push("/admin");
        window.location.reload();
      }
      if (searchInput === "home") {
        history.push("");
        window.location.reload();
      }
    }
  };

  React.useEffect(() => {}, [searchInput]);

  return (
    <Navbar id="navbar-main" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <small className="badge badge-amazon mr-2">not</small>
            <img
              src="https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/1200px-Amazon-logo-white.svg.png"
              style={{ height: 20 }}
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 ">
            <Col xs="8" className="mx-0 px-0 d-flex align-items-center mr-2">
              <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                Username
              </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="search-pre">
                    <small className="mr-2">All</small> <i className="fas fa-angle-down"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="search-bar"
                  onKeyDown={submitSearchHandler}
                  onChange={searchInputHandler}
                  value={searchInput}
                />
                <InputGroup.Append>
                  <InputGroup.Text className="search-post">
                    <i className="fas fa-search"></i>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <div className="d-flex align-items-end">
              <Nav.Link href="#link" className="mr-3">
                <div className="dropdown-link">
                  <p className="mb-0">Hello,</p>
                  <p className="mb-0 font-weight-bold d-inline-block mr-2">Account & Lists</p>
                  <i className="fas fa-angle-down"></i>
                </div>
              </Nav.Link>
              <Nav.Link href="#link" className="mr-3">
                <div className="dropdown-link">
                  <p className="mb-0">Returns</p>
                  <p className="mb-0 font-weight-bold ">& Orders</p>
                </div>
              </Nav.Link>
              <Nav.Link href="#link" className="mr-3">
                <div className="dropdown-link">
                  <i className="fas fa-shopping-cart mr-1"></i>
                  <p className="mb-0 d-inline-block font-weight-bold mr-2" style={{ color: "#ff9900" }}>
                    0
                  </p>
                  <p className="mb-0 font-weight-bold">Basket</p>
                </div>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
