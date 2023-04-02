import { Container, Button, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { cartQuantity } = useShoppingCart();
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
          <Button style={{ position: "relative" }}>
            Shop
            <div
              className="rounded d-flex justify-content-center align-items-center bg-danger"
              style={{
                width: "1.5rem",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        </Link>
      </Container>
    </NavbarBS>
  );
}
