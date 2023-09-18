// pages/products/[productId].js
import React from 'react';
import { useRouter } from 'next/router';
import ProductCard from '../../components/Products/ProductCard'; // Import your ProductCard component
import productsData from '../../data/products.json'; // Import your product data

import Feed from '../../components/Feed';
import imageData from '../../data/claudia2.json';

import styles from '../../styles/products.module.css'

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
      <h1>Product Details</h1>
      <ProductCard image={product.image} name={product.name} price={product.price} />
      <div className='feed' id='Feed' >
        <Feed imageData={filteredImageData} />
      </div>


      {/* You can display more product details here */}
    </div>
  );
};

export default ProductDetail;
