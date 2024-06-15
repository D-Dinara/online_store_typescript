import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { products, error, loading } = useProducts();

  return (
    <div className="container mx-auto max-w-6xl pt-5">
      { error && <ErrorMessage error={error} /> }
      { loading &&  <Loader /> }
      <div className="grid grid-cols-4 gap-4">
        { products.map(product => <Product product={product} key={product.id}/>) }
      </div>
      <Modal>
        <CreateProduct />
      </Modal>
    </div>
    
  );
}

export default App;
