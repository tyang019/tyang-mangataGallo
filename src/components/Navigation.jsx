import { Link } from "react-router-dom"

export default function Navigation() {
  return(
      <nav>
        <ul className="nav_bar">
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/men">
              Men's
          </Link>
          </li>
          <li>
            <Link to='/women'>
              Women's
          </Link>
          </li>
          <li>
            <Link to='/accessories'>
              Accessories
            </Link>
            </li>
          <li>
            <Link to='contact'>
                Contact
            </Link>
          </li>
        </ul>
      </nav>
  )
}