// ProductCard.js
import React from 'react';

import styles from '../../styles/products.module.css'

const ProductCard = ({ image, name, price }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
