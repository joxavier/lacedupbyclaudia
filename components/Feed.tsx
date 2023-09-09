
import { useEffect, useState } from 'react';
import Image from 'next/image'

import styles from '../styles/socials.module.css'

export default function Feed({ imageData }) {

  return (
    <div className={styles.socialsContainer}>

      <div className={styles.title}>
        <Image
          src='/feed.png'
          alt="Styles Title"
          width={834}
          height={347}
        />
      </div>
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




