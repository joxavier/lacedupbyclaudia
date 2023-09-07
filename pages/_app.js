import '../styles/globals.css'
import localFont from 'next/font/local'

const myFont = localFont({ 
   src: '../styles/fonts/masiku/masiku.ttf',
    variable: '--font-masiku',
  })


function MyApp({ Component, pageProps }) {
  return(
    <main className={'${myFont.variable}'}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
