import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "/src/assets/Asset 2@3x.png";


export default function Header(){
  return(
    <header>
        <div className="search-bar-position">
          <img className="logo" src={logo} alt="logo" />
          <input id="input" className="search-bar" placeholder="Search" type="text" />
          <button type="button" className="search-button">Search</button>
      </div>
    </header>
  )
}
