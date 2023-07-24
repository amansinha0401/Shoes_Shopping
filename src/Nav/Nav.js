import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import data from "../db/data";
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { AiOutlineUser} from 'react-icons/ai';
import { useState } from "react";
import { FaFrog} from 'react-icons/fa';
function Nav({ handleInputChange, query }) {
  return (
   <nav className="a3">
     <div className="as">
      <a href="#" className="logo1"><FaFrog></FaFrog></a>
      <p className="as1">SHOESHUB</p>
     </div>
<div className="a1">
<input type="text" 
className="a2" 
onChange={handleInputChange}
value={query}
/>
</div>
<div className="a3">
  <a href="#"><FiHeart /></a>
  <a href="#" ><AiOutlineShoppingCart/></a>
  <a href="#" ><AiOutlineUser/></a>
</div>
   </nav> 
  );
}

export default Nav
