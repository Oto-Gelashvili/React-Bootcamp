// ProductGrid.js
import React from 'react';
import ProductItem from './ProductItem';
import './ProductGrid.css';
import shoes from '../../../assets/images/shoes.jpg'; // Go up two levels to src
import dress from '../../../assets/images/dress.jpg'; // Go up two levels to src
import jacket from '../../../assets/images/jacket.jpg'; // Go up two levels to src

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: dress,
      title: 'Summer Floral Dress',
      description:
        'A beautiful summer dress with vibrant floral patterns, perfect for sunny days.',
    },
    {
      id: 2,
      image: shoes,
      title: 'Black Leather Shoes',
      description:
        'Elegant black leather shoes that offer both style and comfort for any occasion.',
    },
    {
      id: 3,
      image: jacket,
      title: 'Vintage Denim Jacket',
      description:
        'A classic denim jacket with a vintage wash, perfect for a casual yet stylish look.',
    },
  ];
  // when button is clicked it gets logged in console
  const handleAddToCart = (productId) => {
    console.log(`Added product with id: ${productId} to cart`);
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          onAddToCart={() => handleAddToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
