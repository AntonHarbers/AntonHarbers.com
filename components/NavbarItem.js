import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NavbarItem = ({ active, name, link }) => {
    return (
        <Link onClick={active} href={link}>
            <div 
                className='flex font-bold text-xl select-none w-52 h-32 items-center justify-center m-10 border-2 shadow-md shadow-light border-light cursor-pointer active:text-light active:bg-primary active:scale-125 hover:text-primary hover:bg-light hover:scale-150 transition duration-500 ' 
            >
                {name}
            </div>
        </Link>
    )
}

export default NavbarItem