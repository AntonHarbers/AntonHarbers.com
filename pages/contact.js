import React from 'react'
import {motion} from "framer-motion";

function contact() {
  return (
    <motion.div className='w-full h-full items-center justify-center flex flex-col' initial={{ x: "100vw", opacity: 0 }} exit={{ x: "-100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <div className=' text-5xl font-bold'>Contact</div>
      <form className=' flex flex-col p-10 mx-auto my-auto'>
        <input type="text" placeholder="Name" className=' rounded-md m-10 w-72 h-12 p-2 border-4 border-dark text-primary focus:border-secondary outline-none hover:border-secondary'  />
        <input type="text" placeholder="Email" className=' rounded-md m-10 w-72 h-12 p-2 border-4 border-dark text-secondary outline-none focus:border-secondary hover:border-secondary' />
        <input type="text" placeholder="Subject" className=' rounded-md m-10 w-72 h-12 p-2 border-4 border-dark text-secondary outline-none focus:border-secondary hover:border-secondary' />
        <textarea placeholder="Message" className=' rounded-md m-10 w-72 h-32 p-2 border-4 border-dark text-secondary outline-none focus:border-secondary hover:border-secondary' />
        <button onClick={(e) => e.preventDefault()} className=' rounded-md m-10 font-bold p-5 border-2 border-light hover:bg-secondary hover:bg-opacity-75 transition duration-300'>Submit</button>
      </form>
    </motion.div>
  )
}

export default contact