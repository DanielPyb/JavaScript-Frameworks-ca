import { Button, ListGroupItem } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useEffect, useState } from "react";
import { baseURL } from "../utilities/BaseURL";
import { currencyFormatter } from "../utilities/currencyFormatter";

export function CartItem({ id, quantity }) {
  const { removeCart } = useShoppingCart();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);
  const item = items.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <ListGroupItem>
      <img
        src={item.imageUrl}
        style={{ width: "300px", height: "200px", objectFit: "cover" }}
      />
      <div class="me-auto">
        <div>
          {item.title} x{quantity}
        </div>
        <div className="text-muted">
          {currencyFormatter(item.discountedPrice)}
        </div>
      </div>
      <div>{currencyFormatter(item.discountedPrice * quantity)}</div>
      <Button
        onClick={() => removeCart(item.id)}
        variant="dark"
        className="w-100"
      >
        x
      </Button>
    </ListGroupItem>
  );
}
