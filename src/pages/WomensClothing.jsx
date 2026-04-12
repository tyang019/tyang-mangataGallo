import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';
import ProductCard from '../components/ProductCard';
const API_BASE_URL = 'https://fakestoreapi.com/products/category/women%27s%20clothing';
import Banner from '../components/Banner';
import womensData from '../data/womensClothing.json'

export default function WomensClothing(){
  const [womensClothing, setWomensClothing] = useState([]); //products passes an array as the initial value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {category} = useParams();

  useEffect( () => {
    const fetchProducts = async () => {
      try{
        setLoading(true);
        setError(null);

        // const response = await fetch(API_BASE_URL);
        // const data = await response.json();
        // setWomensClothing(data);
        setWomensClothing(womensData);

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
        title="Women's Clothing Collection"
        
        subtitle="Our mission is to offer customers a refined shopping experience where women's clothing compliment accessories in harmony." />
    {womensClothing.map((product) => (
      <section>
        <ProductCard key={product.id} product={product} />
      </section>
    ))}
    </div>
  )
}