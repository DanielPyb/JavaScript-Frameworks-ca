import { useEffect, useState } from "react";
import { Button, Card, Col, Form, FormControl, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";
import { baseURL } from "../utilities/BaseURL";


export function Home(){
    const [items, setItems] = useState([])

    useEffect(() =>{
        fetch(baseURL).then(res => res.json()).then((result) => setItems(result))
    }, []);


    return(
        <>
        <h1>E-com for å handle</h1>
        <Search/>
        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
        {items.map((item) =>(
            <Col key={item.key}>
            <Card className="h-100">
                    <Link to="/product/">
                    <Card.Img variant="top" src={item.imageUrl} height="200px" style={{objectFit: "cover"}} />
                    </Link>
                    <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span>{item.title}</span>
                    <div>
                    <span>{item.discountedPrice}</span> <br />
                    {item.discountedPrice != item.price ? <div><span className="text-muted">{item.price}</span> <br></br><span>{Math.round(100 - ((item.discountedPrice / item.price) * 100 ))}% off</span></div> : []}
                    </div>
                    </Card.Title>
                    
                    </Card.Body>
                    <Card.Footer variant="bottom">
                    <div className="d-flex">
                    <Link to={`/product/${item.id}`}><Button>View Product</Button></Link>
                    </div>
                    </Card.Footer>
                </Card>
            </Col>
        ))
        }
        </Row>
        </>
    )
}