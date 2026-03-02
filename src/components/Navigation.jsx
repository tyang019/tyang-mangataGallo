import { Link } from "react-router-dom"


export default function Navigation() {
  return (
   <nav>
      <ul className="nav_bar">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products?jewelry">Jewelry</Link></li>
        <li><Link to="/products?category=men's%20clothing">Men's</Link></li>
        <li><Link to="/products?category=women's%20clothing">Women's</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};