// Carousel.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';

import styles from '../../styles/products.module.css'


const Carousel = ({ products }) => {
  const [currentProduct, setCurrentProduct] = useState(0);

  const nextProduct = () => {
    setCurrentProduct((currentProduct + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((currentProduct - 1 + products.length) % products.length);
  };

  return (
    <div>
          <h2 className={styles.title}>Products</h2>
    <div className={styles.carousel}>
        
      <button onClick={prevProduct} className={styles.prevButton}>←</button>
      <ProductCard {...products[currentProduct]} />
      <button onClick={nextProduct} className={styles.nextButton}>→</button>
    </div>
    </div>

  );
};

export default Carousel;
