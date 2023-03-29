import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//checkout page every item that has been added to the cart will be rendered here. Button takes you to a new page and erases everything from the local storage
export function Checkout() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div>Checkout</div>
      <p>Please confirm your purchase</p>
      <Button>
        <Link to="/checkoutSuccess" style={{ color: "white" }}>
          Confirm
        </Link>
      </Button>
    </div>
  );
}
