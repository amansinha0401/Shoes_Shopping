// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../db/data';
import "./ProductDetail.css";
import data from '../db/data';
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const data = products.find((product) => product.id == id);

  if (!data) {
    return <div>Product not found</div>;
  }

  const { img, title, star, reviews, prevPrice, newPrice, dis } = data;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={img} alt={title} />
      </div>
      <div className="product-info">
        <h2>{title}</h2>
        <div className="product-rating">
          <span>Rating: {star}</span>
          <span>Reviews: {reviews}</span>
        </div>
        <div className="product-prices">
          <span className="prev-price">${prevPrice}</span>
          <span className="new-price">${newPrice}</span>
        </div>
        <p className="product-description">{dis}</p> 
        <Link to={`/Cart/${id}`} className="custom-link">
        <button className="add-to-cart-button small-button" >Add to Cart</button>
          </Link> 
      </div>
    </div>
  );
};

export default ProductDetail;
