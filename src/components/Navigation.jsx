import { Link } from "react-router-dom"

export default function Navigation() {
  return (
   <nav>
      <ul className="nav_bar">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">All Products</Link></li>
        <li><Link to="/products?category=men's%20clothing">Men's</Link></li>
        <li><Link to="/products?category=women's%20clothing">Women's</Link></li>
        <li><Link to="/products?category=jewelery">Accessories</Link></li>
      </ul>
    </nav>
  );
};