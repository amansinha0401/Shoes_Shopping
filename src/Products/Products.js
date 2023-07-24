import "./Products.css";
import { FaShoppingBag } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { useState } from "react";

function Products({ result }) {
  return (
    <div className="card-container">
      {result}
    </div>
  );
}

export default Products;
