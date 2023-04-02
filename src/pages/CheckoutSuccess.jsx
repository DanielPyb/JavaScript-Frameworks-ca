import { Link } from "react-router-dom";
//Successfull checkout page
export function CheckoutSuccess() {
  return (
    <div>
      <Link to={"/"}>
        <h1> Return to shopping </h1>
      </Link>
    </div>
  );
}
