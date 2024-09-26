// ProductItem.js
import React from 'react';
import './ProductItem.css';

const ProductItem = ({ image, title, description, onAddToCart }) => {
  return (
    <div className="product-item">
      <img src={image} alt={title} className="product-image" />
      <div className="text-cont">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
