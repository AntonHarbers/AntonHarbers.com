import React from 'react'
import Navbar from './Navbar'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link';

const Header = () => {

    const [navbarActive, setNavbarActive] = useState(false);

    const SetNavbar = (e) => {
        setNavbarActive(!navbarActive);
    }

    return (
        <div className='absolute top-0 left-0 h-[100vh] w-[100vw]'>
            <div className='flex justify-between mx-10 h-36 items-center overflow-hidden'>
                <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: .5 }} className="text-4xl"><Link href={"/"}>LOGO</Link></motion.h1>
                <motion.div whileHover={{ rotate: 360, scale: 1.2 }} whileTap={{ scale: .7 }} transition={{ type: "spring", stiffness: 120 }}>
                    <Bars3Icon className='cursor-pointer h-20 w-20 text-light hover:text-secondary' onClick={SetNavbar} />
                </motion.div>
                <AnimatePresence>
                    {navbarActive
                        ?
                        <Navbar active={SetNavbar} />
                        :
                        null}
                </AnimatePresence>

            </div>
        </div>

    )
}

export default Header