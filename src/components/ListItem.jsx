import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

export function ListItem({
  id,
  discountedPrice,
  title,
  price,
  imageUrl,
  rating,
  description,
}) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{title}</span>
          <div>
            <span>{currencyFormatter(discountedPrice)}</span> <br />
            {discountedPrice != price ? (
              <div>
                <span className="text-muted">{currencyFormatter(price)}</span>{" "}
                <br></br>
                <span>
                  {Math.round(100 - (discountedPrice / price) * 100)}% off
                </span>
              </div>
            ) : (
              []
            )}
          </div>
        </Card.Title>
      </Card.Body>
      <Card.Footer variant="bottom">
        <div className="d-flex">
          <Link to={`/product/${id}`}>
            <Button>View Product</Button>
          </Link>
        </div>
      </Card.Footer>
    </Card>
  );
}