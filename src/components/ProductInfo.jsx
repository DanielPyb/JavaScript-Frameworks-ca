import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { baseURL } from "../utilities/BaseURL";
import { currencyFormatter } from "../utilities/currencyFormatter";

// based off of listItem, this function gets the one API item and renders it out.
export function ProductInfo() {
  const [item, setItem] = useState(undefined);
  const { id } = useParams();

  // decides if it will be an add to cart button, or if there should be more choices
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeCart,
  } = useShoppingCart();

  const cartQuantity = getItemQuantity(id);

  useEffect(() => {
    fetch(baseURL + "/" + id)
      .then((res) => res.json())
      .then((result) => setItem(result));
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {item ? (
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={item.imageUrl}
            height="600px"
            style={{ objectFit: "cover" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span>{item.title}</span>
              <div>
                <span>{currencyFormatter(item.discountedPrice)}</span> <br />
                {item.discountedPrice != item.price ? (
                  <div>
                    <span className="text-muted">
                      {currencyFormatter(item.price)}
                    </span>{" "}
                    <br></br>
                    <span>
                      {Math.round(
                        100 - (item.discountedPrice / item.price) * 100
                      )}
                      % off
                    </span>
                  </div>
                ) : (
                  []
                )}
              </div>
            </Card.Title>
            <p>{item.description}</p>
          </Card.Body>
          <Card.Footer variant="bottom">
            {cartQuantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseCartQuantity(id)}
              >
                Add to cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{cartQuantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </Card.Footer>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
