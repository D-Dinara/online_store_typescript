import { useEffect, useState } from "react";
import Product from "./components/Product";
import axios from 'axios';
import { IProduct } from "./models";

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
    setProducts(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 mx-auto max-w-6xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      { products.map(product => <Product product={product} key={product.id}/>) }
    </div>
  );
}

export default App;
