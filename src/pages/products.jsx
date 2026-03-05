import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';
import ProductCard from '../components/ProductCard';
const API_BASE_URL = 'https://fakestoreapi.com/products';

export default function Products () {
  
  const [products, setProducts] = useState([]); //hook passes an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {category} = useParams();

  const product = { title: 'Locket', price: 299.99 };
fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data));

  useEffect( () => {
    const fetchProducts = async () => {
      try{
        setLoading(true);
        setError(null);

        const url = category 
        ? `https://fakestoreapi.com/products/category/${category}` 
        : {API_BASE_URL};

        const response = await fetch(url)

        const data = await response.json();
        console.log(data); 

        if(!response.ok){
          console.log('Failed to fetch products');
          return;
        }
        setProducts(data);
      }catch (error) {
        setError(error);
      }finally {
        setLoading(false);
      }
     }
     fetchProducts();
  }, [category])

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