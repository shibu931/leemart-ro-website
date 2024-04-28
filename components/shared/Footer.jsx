import Link from 'next/link'
import React from 'react'
import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='text-white'>
      <div className="container p-5 lg:p-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div>
            <Link href="/" className='focus:outline-none focus:bg-blue-300/50 rounded-sm text-3xl'>Leemart</Link>
            <p className='mt-4'>Leemart removes impurities, contaminants, and bacteria, ensuring every drop of water is clean and safe for consumption. </p>
            <ul className='flex mt-4'>
              <li className='mx-2'>
                <Link href="#"><Image src="/img/facebook.svg" width={30} height={30} alt="facebook" /></Link>
              </li>
              <li className='mx-2'>
                <Link href="#"><Image src="/img/twitter.webp" width={30} height={30} alt="twitter" /></Link>
              </li>
              <li className='mx-2'>
                <Link href="#"><Image src="/img/instagram.svg" width={30} height={30} alt="instagram" /></Link>
              </li>
            </ul>
          </div>
          <div className='lg:mx-auto'>
            <h5 className='text-xl font-semibold mb-4'>Quick Links</h5>
            <ul>
              <li className='mb-1 text-md hover:text-blue-200'><Link className='focus:outline-none focus:bg-blue-300/50 rounded-sm' href="/">Home</Link></li>

              <li className='mb-1 text-md hover:text-blue-200'><Link className='focus:outline-none focus:bg-blue-300/50 rounded-sm' href="/contactus">Contact Us</Link></li>
              <li className='mb-1 text-md hover:text-blue-200'><Link className='focus:outline-none focus:bg-blue-300/50 rounded-sm' href="/aboutus">About Us</Link></li>
            </ul>
          </div>
          <div className='lg:mx-auto'>
            <h5 className='text-xl font-semibold mb-4'>Products</h5>
            <ul>
              <li className='mb-1 text-md hover:text-blue-200'><Link className='focus:outline-none focus:bg-blue-300/50 rounded-sm' href="/ro-water-purifiers">Ro Water Purifiers</Link></li>
              <li className='mb-1 text-md hover:text-blue-200'><Link className='focus:outline-none focus:bg-blue-300/50 rounded-sm' href="/water-softeners">Water Softeners</Link></li>
              <li className='mb-1 text-md hover:text-blue-200'><Link className='focus:outline-none focus:bg-blue-300/50 rounded-sm' href="/commercial-water-purifiers">Commercial Water Purifiers</Link></li>
            </ul>
          </div>
          <div className='lg:mx-auto'>
            <h5 className='text-xl font-semibold mb-4'>Contact Us</h5>
            <ul>
              <li className='mb-1 text-md hover:text-blue-200'><PhoneArrowDownLeftIcon class="h-4 w-4 text-white me-2 inline" />
                  <a href="tel:+918076602998" className='focus:outline-none focus:bg-blue-300/50 rounded-sm'>+91 80766 02998</a></li>
              <li className='mb-1 text-md hover:text-blue-200'>
                <EnvelopeIcon class="h-4 w-4 me-2 inline text-white" />
                <a href="mailto:info@leemart.co.in" className='focus:outline-none focus:bg-blue-300/50 rounded-sm'>info@leemart.co.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-700">
        <div className="container py-4 lg:px-20">
          <div>
            <div className="grid md:grid-cols-1 text-base text-blue-100">
              <div className='mx-auto lg:me-auto mb-2 text-center'>
                <p className='inline'>Leemart © 2024. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer