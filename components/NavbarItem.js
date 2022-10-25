import React from 'react'
import Link from 'next/link'

const NavbarItem = ({ active, name, link }) => {
    return (
        <Link onClick={active} href={link}>
            <div className=' select-none p-10 m-10 border-2 border-light cursor-pointer hover:bg-secondary hover:border-primary transition duration-200 ease-in-out' >
                {name}
            </div>
        </Link>
    )
}

export default NavbarItem