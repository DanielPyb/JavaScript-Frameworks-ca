import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


export function Checkout(){
    return(
        <div className="d-flex flex-column align-items-center justify-content-center">
        <div>Checkout</div>
        <p>Please confirm your purchase</p>
        <Button>
         <Link to="/checkoutSuccess" style={{color: "white"}}>
         Confirm 
         </Link>
         </Button>
        </div>
    )
}