import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = ({ active }) => {
    return (
        <motion.div
            initial={{ y:"-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration:1 }}
            className="absolute top-0 left-0 w-[100vw] h-[100vh] z-10 bg-dark bg-opacity-90">
            <div onClick={active} className='flex flex-col md:flex-row h-full w-full justify-center items-center'>
                <NavbarItem active={active} name="Home" link="/" />
                <NavbarItem active={active} name="My Projects" link="/projects" />
                <NavbarItem active={active} name="Contact" link="/contact" />
            </div>
        </motion.div>
    )
}

export default Navbar