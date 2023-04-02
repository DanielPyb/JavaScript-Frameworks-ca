import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Checkout } from "../pages/Checkout";
import { CheckoutSuccess } from "../pages/CheckoutSuccess";
import { Product } from "../pages/Product";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <>
      <Header />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
