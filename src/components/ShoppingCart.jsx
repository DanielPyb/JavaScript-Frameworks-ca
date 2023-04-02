import { ListGroup } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { useEffect, useState } from "react";
import { baseURL } from "../utilities/BaseURL";

export function ShoppingCart() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);
  const { cartItems } = useShoppingCart();
  return (
    <ListGroup>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="ms-auto fw-bold">
        Total{" "}
        {currencyFormatter(
          cartItems.reduce((total, cartItem) => {
            const item = items.find((i) => i.id === cartItem.id);
            return total + (item?.discountedPrice || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
    </ListGroup>
  );
}
