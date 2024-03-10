import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className='my-0'>
        <div className='primary-bg h-[200px] flex w-full'>
            <div className='text-3xl m-auto text-white'>
                <Link href="/" className='font-light underline underline-offset-4'>Home</Link>
                <span className='font-normal text-4xl'> / </span>
                <Link href="/contactus" className='font-light hover:cursor-default' aria-disabled="true">Contact Us</Link>
            </div>
        </div>
        <div className="container py-10 lg:py-20">
            <div className="bg-white p-5 lg:p-20">
                
            </div>
        </div>  
    </section>
  )
}

export default Contact