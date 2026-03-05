import { Link } from "react-router-dom"


export default function Navigation() {
  return (
   <nav>
      <ul className="nav_bar">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/category/jewelery">Jewelry</Link></li>
        <li><Link to="/category/men's clothing">Men's</Link></li>
        <li><Link to="/category/women's clothing">Women's</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
  </nav>
  );
};