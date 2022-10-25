import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className=' bg-primary text-light h-[100vh] overflow-hidden'>
      <Head>
        <title>Anton Harbers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className='flex w-full h-full justify-center items-center align-middle text-center'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
