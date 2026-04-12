import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';
import ProductCard from '../components/ProductCard';
const API_BASE_URL = 'https://fakestoreapi.com/products/category/jewelery';
import jeweleryData from '../data/jewelery.json'; 
import Banner from '../components/Banner';

export default function Jewelery(){
  const [jewelery, setJewelery] = useState([]); //products passes an array as the initial value
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
        // setJewelery(data);
        setJewelery(jeweleryData);
        
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
        title="Our Jewelery Collection"
        
        subtitle="Our mission is to offer customers a refined shopping experience where jewelery compliment clothing in harmony." />
    {jewelery.map((product) => (
      <section>
        <ProductCard key={product.id} product={product} />
      </section>
    ))}
    </div>
  )
}