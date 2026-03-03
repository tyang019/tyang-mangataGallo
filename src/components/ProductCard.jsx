export default function ProductCard(product){
  return (
    <article className="product-card">
       <div className="product-content">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </div> 
        <div className="form">
          <p className="product-price">{product.price}</p>
          <button>Add to cart</button>
        </div>
    </article>
  );
}