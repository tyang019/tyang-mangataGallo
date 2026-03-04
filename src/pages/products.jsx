import {useState, useEffect} from 'react';
const API_BASE_URL = 'https://fakestoreapi.com/products';
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';
import ProductCard from '../components/ProductCard';

export default function Products () {
  
  const [products, setProducts] = useState([]); //hook passes an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
    console.log("Fetching...");

    const fetchProducts = async () => {
      try{

        setLoading(true);
        setError(null);

        const response = await fetch(API_BASE_URL);
        const data = await response.json();

        if(!response.ok){
          console.log('Failed to fetch products');
          return;
        }

        setProducts(data);
        console.log("Data received:", data);

      }catch (error) {
        setError(error);
      }finally {
        setLoading(false);
        console.log("Loading finished");
      }
     }
     fetchProducts();
  }, [])

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;


  return (
  <section className="product-grid">
    {products.map((product) => (
  <ProductCard key={product.id} product={product} />
)
)}
    </section>
  );
}