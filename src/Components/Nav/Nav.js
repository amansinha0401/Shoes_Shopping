import "./Nav.css";
import { BsHeart } from "react-icons/bs";
import data from "../../db/data";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from "react";
import { FaFrog } from 'react-icons/fa';
import logoImage from './as.png';
import Cart from "../Cart";
import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";
function Nav({ handleInputChange, query }) {
  const { ide } = useParams(); 
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <a href="#" className="logo">
        <img src={logoImage} alt="Shoes Hub Logo" />
         
        </a><p className="logo-text">Shotastic</p>

      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search shoes..."
          onChange={handleInputChange}
          value={query}
        />
      </div>
      

      <div className="icon-container">
      <><a className="aka" href="#">Wishlist</a>< BsHeart className="ico"/></>
      <><Link to={`/Cart/${ide}`} className="custom-link"><a className="aka">Cart</a>< AiOutlineShoppingCart className="ico"/></Link> </> 
      <> <a className="aka" href="#">User</a>< AiOutlineUser className="ico"/></>
    
      </div>
    </nav>
  );
}

export default Nav;