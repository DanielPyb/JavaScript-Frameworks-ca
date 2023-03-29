import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { baseURL } from "../utilities/BaseURL";
import { currencyFormatter } from "../utilities/currencyFormatter";

export function Product() {
  const [item, setItem] = useState(undefined);
  const { id } = useParams();

  const cartQunatity = 1;

  useEffect(() => {
    fetch(baseURL + "/" + id)
      .then((res) => res.json())
      .then((result) => setItem(result));
  }, []);
  return (
    <>
      <div>Product</div>

      {item ? (
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={item.imageUrl}
            height="800px"
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
          </Card.Body>
          <Card.Footer variant="bottom">
            {cartQunatity === 0 ? (
              <Button className="w-100">Add to cart</Button>
            ) : (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{cartQunatity} in cart</span>
                </div>
                <Button>+</Button>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button className="danger"></Button>
                </div>
              </div>
            )}
          </Card.Footer>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
