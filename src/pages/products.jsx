//destructure the props by directly extracting {product} from props
//ProductCard displays one item at a time

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h2>{product.name}</h2>
      <img src={product.image} />
      <p>${product.price}</p>
      <button style={{height: "2rem", fontSize: "15px"}}>Add to cart</button>
    </article>
  );
}
//{ items = [] } is defensive coding
//product is a universal name used for the items
//if 
export default function Products({ items = [] }) {
  return (
    <div>
      <section className="product-grid">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
    </div>
    
  );
}