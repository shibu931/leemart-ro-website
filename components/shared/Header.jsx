import Link from 'next/link'
import React from 'react'

const Header = ({title}) => {
    return (
        <div className='primary-bg h-[200px] flex w-full ps-4'>
            <div className='text-3xl m-auto text-white'>
                <Link href="/" className='font-light underline underline-offset-4'>Home</Link>
                <span className='font-normal text-4xl'> / </span>
                <span>{title}</span>
            </div>
        </div>
    )
}

export default Header