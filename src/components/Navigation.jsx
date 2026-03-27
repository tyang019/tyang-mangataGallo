import { Link } from "react-router-dom"


export default function Navigation() {
  return (
   <nav>
      <ul className="nav_bar">
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/jewelery">JEWELERY</Link></li>
        <li><Link to="/men's clothing">MEN'S</Link></li>
        <li><Link to="/women's clothing">WOMEN'S</Link></li>
        <li><Link to="/contact">ABOUT US</Link></li>
      </ul>
  </nav>
  );
};