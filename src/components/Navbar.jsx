import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartIcon } from "./CartIcon";

export function Navbar() {
  return (
    <NavbarBS className="bg-white shadow-sm.">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/contact"} as={NavLink}>
            Contact
          </Nav.Link>
          <Nav.Link to={"/checkout"} as={NavLink}>
            Checkout
          </Nav.Link>
        </Nav>
        <Link to={"/checkout"}>
          <CartIcon />
        </Link>
      </Container>
    </NavbarBS>
  );
}
