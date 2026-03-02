// import { useMemo, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useProducts } from '../hooks/useProducts';
// import LoadingState from '../components/states/LoadingState';
// import ErrorState from '../components/states/ErrorState';

export function ProductCard({ product }) {
  return (
    <article className="product-card">
       <img src={product.image} alt={product.title} />
      <div className="product-content">
        <h3>{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className='form'>
          <p className="product-price">${product.price}</p>
          <button type="button">Add to cart</button>
        </div>
      </div>
    </article>
  );
}
export default function Products() {
  return (
    <>
      
    </>
  )
}