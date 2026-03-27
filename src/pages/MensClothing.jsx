import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';
import ProductCard from '../components/ProductCard';
const API_BASE_URL = 'https://fakestoreapi.com/products/category/men%27s%20clothing';
import Banner from '../components/Banner';

export default function MensClothing(){
  const [mensClothing, setMensClothing] = useState([]); //products passes an array as the initial value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {category} = useParams();

  useEffect( () => {
    const fetchProducts = async () => {
      try{
        setLoading(true);
        setError(null);

        const response = await fetch(API_BASE_URL);
        const data = await response.json();
        setMensClothing(data);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;


  return (
    <div>
    <Banner  
        title="Men's Clothing Collection"
        
        subtitle="Experience our unique collection of men's clothing where style compliment accessories." />
    {mensClothing.map((product) => (
      <section>
        <ProductCard key={product.id} product={product} />
      </section>
    ))}
    </div>
  )
}