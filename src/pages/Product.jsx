import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { baseURL } from "../utilities/BaseURL";



export function Product(){
    const [ item, setItem ] = useState(undefined);
    const {id} =  useParams()

    
    useEffect(() =>{
        fetch(baseURL + "/" + id).then(res => res.json()).then((result) => setItem(result))
    }, []);
    return(
        <>
            <div>Product</div>

        {item ?(
            <Card className="min-h-100">
                    <Card.Img variant="top" src={item.imageUrl} height="800px" style={{objectFit: "cover"}} />
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
                    <Button>
                        Add to cart
                    </Button>
                    </Card.Footer>
                </Card>
                ) : (
                    <div>Loading...</div>
                )}
        </>
    )
}