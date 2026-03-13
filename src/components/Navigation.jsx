import { Link } from "react-router-dom"


export default function Navigation() {
  return (
   <nav>
      <ul className="nav_bar">
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/category/jewelery">JEWELRY</Link></li>
        <li><Link to="/category/men's clothing">MEN'S</Link></li>
        <li><Link to="/category/women's clothing">WOMEN'S</Link></li>
        <li><Link to="/contact">ABOUT US</Link></li>
      </ul>
  </nav>
  );
};