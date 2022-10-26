import React from 'react'
import Iframe from 'react-iframe'
import { XMarkIcon, StopIcon, MinusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


function Webframe({ uri, link, text }) {
    return (
        <div className=' mx-24 my-12 flex flex-col border-2 border-microsoft-gray h-auto w-[35rem]'>
            <div className='bg-gradient-to-r from-microsoft-blue to-microsft-lightBlue flex justify-between h-10 w-full items-center'>
                <div className='m-1 select-none'>{text}</div>
                <div className='flex'>
                    <div className='h-5 w-5 mx-1 bg-microsoft-gray shadow-sm shadow-light active:shadow-md rounded-sm cursor-pointer text-dark'><MinusIcon /></div>
                    <div className='h-5 w-5 mx-1 bg-microsoft-gray shadow-sm shadow-light active:shadow-md rounded-sm cursor-pointer text-dark'><StopIcon /></div>
                    <div className='h-5 w-5 mx-1 bg-microsoft-gray shadow-sm shadow-light active:shadow-md rounded-sm cursor-pointer text-dark'><XMarkIcon /></div>
                </div>
            </div>
            <Link href={link}>
                <a target="_blank" className='flex justify-center items-center'>
                    <img src={uri} className='h-full w-full cursor-pointer' />
                </a>
            </Link>
        </div>
    )

}

export default Webframe