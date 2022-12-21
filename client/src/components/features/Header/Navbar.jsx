import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import "./Header.css";
function Header() {
  return (
    <Navbar
      bg="dark"
      className="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <Image
          class="rounded-circle"
          width="40"
          height="40"
          src="/images/logo.jpg"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Tables" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/tables">teacher's desk</NavDropdown.Item>
            <NavDropdown.Item href="/tables">student's desk</NavDropdown.Item>
            <NavDropdown.Item href="/tables">Executive desk</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Chirs" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/chirs">teacher's chirs</NavDropdown.Item>
            <NavDropdown.Item href="/chirs">student's chirs</NavDropdown.Item>
            <NavDropdown.Item href="/chirs">Executive's chirs</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Clothes" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/closets">
              teacher'sClothes
            </NavDropdown.Item>
            <NavDropdown.Item href="/closets">
              teacher's Clothes
            </NavDropdown.Item>
            <NavDropdown.Item href="/closets">
              Executive Clothes
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/signUp">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
