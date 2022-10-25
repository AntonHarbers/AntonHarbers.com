import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = ({ active }) => {
    return (
        <motion.div
            initial={{ y:-500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -500, opacity: 0 }}
            transition={{ duration:1}}
            className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-dark bg-opacity-90">
            <div onClick={active} className='flex h-full w-full justify-center items-center'>
                <NavbarItem active={active} name="Home" link="/" />
                <NavbarItem active={active} name="My Projects" link="/projects" />
                <NavbarItem active={active} name="Contact" link="/contact" />
            </div>
        </motion.div>
    )
}

export default Navbar