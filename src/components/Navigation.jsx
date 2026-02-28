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
              Men
          </Link>
          </li>
          <li>
            <Link>
              Women
          </Link>
          </li>
          <li>
            <Link>
              Products
            </Link>
            </li>
          <li>
            <Link>
                Contact
            </Link>
          </li>
        </ul>
      </nav>
  )
}