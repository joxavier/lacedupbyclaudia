import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import Feed from '../components/Feed';
import Footer from '../components/Footer';

import imageData from '../data/claudia.json';


export default function Home() {

  const imageSources = [
    '/hero-img/claudia.png',
  ];

  const randomImageSource = imageSources[Math.floor(Math.random() * imageSources.length)]


  return (
    <div className={styles.container}>
      <Head>
        <title>LacedUpbyClaudia</title>
        <meta name="description" content="𝒴𝑜𝓊𝓇 𝒽𝒶𝒾𝓇 𝒾𝓈 𝓎𝑜𝓊𝓇 𝒸𝓇𝑜𝓌𝓃 👑" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.title}>LacedUpby</h1>
            <h1 class={styles.titleAlt}>Claudia</h1>
            <Image
            className={styles.logo}
            src={randomImageSource}
            alt="Next.js Logo"
            width={660}
            height={627}
            priority
          />
        </div>




        <p className={styles.description}>
          𝒴𝑜𝓊𝓇 𝒽𝒶𝒾𝓇 𝒾𝓈 𝓎𝑜𝓊𝓇 𝒸𝓇𝑜𝓌𝓃 👑
        </p>

        <div className={styles.grid}>
          <a href="https://booksy.com/en-ca/5272_ace-cutz-studio_barbers_870806_mississauga/staffer/27687#ba_s=dl_1" className={styles.card}>
            <h2>Book &rarr;</h2>
            <p>💰Deposit required.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Products &rarr;</h2>
            <p>View top offerings</p>
          </a>

          <a
            href="#Socials"
            className={styles.card}
          >
            <h2>Socials &rarr;</h2>
            <p>Connect & view past works.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Learn &rarr;</h2>
            <p>
              Hands on training.
            </p>
          </a>
        </div>
      </main>

      <div className='socials' id='Socials' >
        <Feed imageData={imageData}/>
      </div>
      

      
      < Footer/>

    </div>
    
  )
}
