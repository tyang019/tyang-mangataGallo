//destructure the props by directly extracting {product} from props
//ProductCard displays one item at a time

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} />
      <div className="form">
        <h2 style={{fontSize: "17px"}}>{product.name}</h2>
        <p>${product.price}</p>
      </div>
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