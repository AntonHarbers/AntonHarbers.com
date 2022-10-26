import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <div className=' bg-primary text-light h-[100vh] overflow-x-hidden'>
      <Head>
        <title>Anton Harbers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className='flex w-full h-full justify-center pt-32 align-middle text-center'>
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MyApp
