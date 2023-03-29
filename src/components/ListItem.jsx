import { Card } from "react-bootstrap";


export function ListItem(id, discountedPrice, title, price, imageUrl, rating, description){
    return (
    <Card>
        <Card.Img variant="top" src={imageUrl} height="200px" />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content align-items-baseline mb-4">
                <span>{title}</span>
            </Card.Title>
        </Card.Body>
    </Card>
    )
}