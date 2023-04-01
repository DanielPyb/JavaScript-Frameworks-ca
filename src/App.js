import { Container, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";
import { Product } from "./pages/Product";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutSucess" element={<CheckoutSuccess />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
