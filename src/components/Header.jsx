import logo from "/src/assets/Asset 2@3x.png";
import shopBag from "/src/assets/shopping-bag.png";
import user from "/src/assets/user.png";
import { Link } from "react-router-dom";

export default function Header(){
  return(
       <header>
        <div className="header_main">
          <div className="header_logo">
            <Link to="/home">
              <img className="logo" src={logo} alt="logo"/>
            </Link>
          </div>
          
            <div className="search-bar-position">
                <input className="search-bar" id="input" placeholder="Search" type="text" />

                <button className="search-button" type="button" >Search</button>
                  <Link className="relative" to="/bag">
                    <img 
                      style={{ 
                        height: "30px",
                        marginLeft: "15px",
                        marginRight: "15px" 
                        }} 
                      src={shopBag} 
                      alt="shopping-bag"
                      />
                  </Link>
                  <Link to="/user">
                    <img 
                      style={{height: "30px"}}
                      src={user} 
                      alt="user"
                    />
                  </Link>
              </div>
            </div>
    </header>
   
  )
}
