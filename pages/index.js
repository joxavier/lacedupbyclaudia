import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

import Feed from '../components/Feed';
import Carousel from '../components/Products/Carousel';
import Footer from '../components/Footer';

import imageData from '../data/claudia1.json';
import productData from '../data/products.json';




export default function Home() {

  const imageSources = [
    '/claudiaLogo1.png',
  ];

  const randomImageSource = imageSources[Math.floor(Math.random() * imageSources.length)]

  const [isPopupVisible, setPopupVisible] = useState(false);


  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };




  return (
    <div className={styles.container}>
      <Head>
        <title>LacedUpbyClaudia</title>
        <meta name="description" content="lacedupbyclaudia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Image
            className={styles.logo}
            src={randomImageSource}
            alt="Next.js Logo"
            width={754}
            height={1203}
            priority
          />
        </div>




        <p className={styles.description}>
          𝒴𝑜𝓊𝓇 𝒽𝒶𝒾𝓇 𝒾𝓈 𝓎𝑜𝓊𝓇 𝒸𝓇𝑜𝓌𝓃 👑
        </p>

        <div className={styles.grid}>
          <a href="https://booksy.com/en-ca/5272_ace-cutz-studio_barbers_870806_mississauga/staffer/27687#ba_s=dl_1" className={styles.card}>
            <h2>Book &rarr;</h2>
            <p>💰Deposit required</p>
          </a>

          <a href="#Styles" className={styles.card}>
            <h2>Styles &rarr;</h2>
            <p>View top offerings</p>
          </a>

          <a
            href="#Feed"
            className={styles.card}
          >
            <h2>Feed &rarr;</h2>
            <p>View past works</p>
          </a>

            <div className={styles.container}>
                <button className={styles.card} onClick={openPopup}>
                  <h2>Learn &rarr;</h2>
                  <p>Hands-on training</p>
                </button>
                {isPopupVisible && (
                  <div className={styles.popup}>
                    <span className={styles.close} onClick={closePopup}>
                      &times;
                    </span>
                    <h2>Coming Soon</h2>
                    <p>Sign up to get notified when this feature is available:</p>
                    <form className={styles.popupContents}>
                      <label>
                        Email:
                        <input type="email" placeholder="Your email" />
                      </label>
                      <button type="submit">Sign Up</button>
                    </form>
                  </div>
                )}
            </div>
        </div>
      </main>

      <div className='styles' id='Styles'>
        <Carousel products={productData} />
      </div>

      <div className='feed' id='Feed' >
        <Feed imageData={imageData} />
      </div>



      < Footer />

    </div>

  )
}

