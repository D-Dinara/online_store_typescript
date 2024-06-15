import { useEffect, useState } from "react";
import Product from "./components/Product";
import axios, { AxiosError } from 'axios';
import { IProduct } from "./models";

function App() {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false);
      setError(error.message)
    }
   
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 mx-auto max-w-6xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{ error }</p>}
      { products.map(product => <Product product={product} key={product.id}/>) }
    </div>
  );
}

export default App;
