import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../components/ShoppingCart";

//checkout page every item that has been added to the cart will be rendered here. Button takes you to a new page and erases everything from the local storage
export function Checkout() {
  function deleteLS() {
    localStorage.removeItem("shopping-cart");
    window.location.reload();
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div>Checkout</div>
      <ShoppingCart />
      <p>Please confirm your purchase</p>
      <Button onClick={() => deleteLS()}>
        <Link to="/checkoutSuccess" style={{ color: "white" }}>
          Confirm
        </Link>
      </Button>
    </div>
  );
}
