// pages/products/[productId].js
import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';


import ProductCard from '../../components/Products/ProductCard'; // Import your ProductCard component
import productsData from '../../data/products.json'; // Import your product data

import Feed from '../../components/Feed';
import imageData from '../../data/claudia2.json';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from '../../styles/products.module.css'
import Head from 'next/head';

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  // Find the product data based on the productId
  const product = productsData.find((p) => p.productId === parseInt(productId, 10));

  if (!product) {
    return <p>Product not found.</p>;
  }

  // Filter the imageData based on hashtags in associatedTags
  const filteredImageData = imageData.filter((image) =>
    image.hashtags.some((tag) => product.associatedTags.includes(tag))
  );

  return (

    <div className={styles.container}>
      <Header />
      
      <div className={styles.productDisplay}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.productDetails}>
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <button className={styles.bookButton}>Book</button>
        </div>
        
        
      </div>


      <div className={styles.productReviews}>

        <div className={styles.productDetails}>
          <h1>Previous Customers</h1>
        </div>


        
      </div>
      


      <div className='feed' id='Feed' >
        <Feed imageData={filteredImageData} />
      </div>


      {/* You can display more product details here */}
      < Footer />
    </div>

  );
};

export default ProductDetail;
