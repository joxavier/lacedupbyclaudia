import '../styles/globals.css'
import localFont from 'next/font/local'

const myFont = localFont({ 
   src: '../styles/fonts/masiku/Masiku.ttf',
    variable: '--font-masiku',
  })


function MyApp({ Component, pageProps }) {
  return(
    <main className={'${myFont.variable} font-sans'}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
