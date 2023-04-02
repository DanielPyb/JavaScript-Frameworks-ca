import { Layout } from "./components/Layout";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Layout />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
