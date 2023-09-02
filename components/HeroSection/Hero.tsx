// MyApp.js

import React from 'react';
import styles from './Hero.module.css';
import Head from 'next/head'


const Hero = () => {
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  let backgroundClass = styles.webBackground;

  if (screenWidth <= 576) {
    backgroundClass = styles.mobileBackground;

  } else if (screenWidth <= 1024) {
    backgroundClass = styles.tabletBackground;
  }

  return (
    <div className={`${styles.HeroContainer} ${backgroundClass}`}>
      <h1>Your Hero Title</h1> 
           
    </div>
  );
};

export default Hero;
