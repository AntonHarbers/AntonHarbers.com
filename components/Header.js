import React from 'react'
import Navbar from './Navbar'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {

    const [navbarActive, setNavbarActive] = useState(false);

    const SetNavbar = (e) => {
        setNavbarActive(!navbarActive);
    }

    return (
        <div className='flex justify-between mx-10 h-36 items-center overflow-hidden'>
            <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: .5 }} className="text-4xl">LOGO</motion.h1>
            <Bars3Icon className='cursor-pointer h-10 w-10 text-light hover:text-secondary' onClick={SetNavbar} />
            <AnimatePresence>
                {navbarActive
                    ?
                    <Navbar active={SetNavbar} />
                    :
                    null}
            </AnimatePresence>

        </div>
    )
}

export default Header