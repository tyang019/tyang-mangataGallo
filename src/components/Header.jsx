import logo from "/src/assets/Asset 2@3x.png";
import shopBag from "/src/assets/shopping-bag.png";
import user from "/src/assets/user.png";
import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header>
      <div style=
      {{
        height: "35px", 
        display: "flex", 
        justifyContent: "end",
        cursor: "pointer"
        }}>
          <img style={{display:"flex", marginRight: "15px" }} src={shopBag} alt="shopping-bag"/>
          <Link to="/user">
            <img 
              style={{height: "35px"}}
              src={user} 
              alt="user"
            />
          </Link>
      </div>

      <div className="search-bar-position">
        <img className="logo" src={logo} alt="logo" />
          <input id="input" className="search-bar" placeholder="Search" type="text" />
          <button type="button" className="search-button">Search</button>
      </div>
    </header>
  )
}
