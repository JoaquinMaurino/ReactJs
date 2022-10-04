import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>SGA</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link className="nav-link">Contacto</Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link to="/categoria/Calzado" className="nav-link">
                Calzado
              </Link>
              <Link to="/categoria/Indumentaria" className="nav-link">
                Indumentaria
              </Link>
              <Link to="/categoria/Chaleco" className="nav-link">
                Chalecos
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
