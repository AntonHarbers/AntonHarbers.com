import React from 'react'
import { motion } from "framer-motion";
import Webframe from '../components/Webframe';


function projects() {

  const uris = [["/yogalana.png", "https://www.lanaharbers.de", "Yoga with Lana"], [ "/paintme.png", "https://paintdotme.herokuapp.com/", "Paint . Me" ], ["/copium.png", "https://copium-blot-tutorial.vercel.app/", "Copium Blog"]]


  return (
    <motion.div initial={{ x: "100vw", opacity: 0 }} exit={{ x: "-100vw", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <div className=' text-5xl font-bold'>Projects</div>
      <div className='w-auto h-auto flex flex-col xl:grid xl:grid-cols-3 bg-primary'>
        {uris.map((uri, index) => (
          <Webframe key={index} uri={uri[0]} link={uri[1]} text={uri[2]} />
        ))}
      </div>
    </motion.div>
  )
}

export default projects