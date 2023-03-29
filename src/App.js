import { Container, Nav } from "react-bootstrap";
import {Routes, Route} from "react-router-dom"
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";
import { Product } from "./pages/Product";

function App() {
  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/checkoutSucess" element={<CheckoutSuccess />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </Container>
    </>
  );
}

export default App;
