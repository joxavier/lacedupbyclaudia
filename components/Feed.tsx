
import { useEffect, useState } from 'react';

import styles from '../styles/socials.module.css'

export default function Feed({ imageData }) {

  return (
    <div className={styles.socialsContainer}>
    <h2 className={styles.title}>Social Media</h2>
    <div className={styles.imageGrid}>
      
      {imageData.map((item, index) => (
        <div key={index} className={styles.imageItem}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={`/api/getImage?url=${encodeURIComponent(item.displayUrl)}`}
                 alt={`Image ${index + 1}`} />
          </a>
        </div>
      ))}
    </div>


    </div>
  );
}




