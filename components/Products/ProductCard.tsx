// ProductCard.js
import React from 'react';
import { useRouter } from 'next/router';

import styles from '../../styles/products.module.css'

const ProductCard = ({ productId, image, name, price }) => {
  const router = useRouter();

  const navigateToProduct = () => {
    router.push(`/products/${productId}`);
  };


  return (
    <div className={styles.productCard} onClick={navigateToProduct}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default ProductCard;

