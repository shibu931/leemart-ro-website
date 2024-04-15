import Header from '@/components/shared/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='my-0'>
    <Header title={"About US"}/>
      <div className="container py-10 lg:py-20">
        <div className="grid  grid-cols-1 md:grid-cols-6 gap-5 lg:gap-10">
          <div className='md:col-span-4'>
            <h2 className='text-3xl font-semibold mb-5'>Overview</h2>
            <p className='mb-4'>Greetings from Leemart, your reliable resource for clean and wholesome drinking water solutions. Here at Leemart, we're committed to giving you the best RO water purifiers possible, supported by state-of-the-art technology and a dedication to quality.</p>
            <p className='mb-4'>With years of experience and knowledge in the water filtration sector, Leemart has become a market leader in providing businesses and homes with safe and clean drinking water. We set out on a mission to transform the way people might obtain clean water, and we haven't stopped searching for new and better ways to satisfy our clients ever since.</p>
            <p className='mb-4'>Leemart stands out for its consistent commitment to quality and dependability. Our selection of RO water purifiers is made to eliminate pollutants, impurities, and dangerous materials from your water, guaranteeing that every sip is clean and revitalising. We work hard to go above and beyond your expectations at every turn, whether it's with our cutting-edge filtration systems, cutting-edge purification technologies, or intuitive features.</p>
            <p className='mb-4'>We at Leemart recognise how important wellness and good health are to you and your family. For this reason, we go above and beyond to produce goods that not only satisfy but also beyond exacting quality requirements. Our dedication to quality extends beyond our line of goods to our customer support, making sure that your entire experience—from purchase to installation and beyond—is flawless.</p>
            <p className='mb-4'>Become one of the millions of pleased consumers who rely on Leemart for all of their water filtration needs. With Leemart RO water purifiers, discover the difference and start living a healthier lifestyle right now.</p>
            <p className='mb-4'>The Leemart about your health.</p>
          </div>
          <div className="md:col-span-2 mx-auto pt-8 lg:pt-16">
            <Image
              src="/img/logo-icon.png"
              width={250}
              height={350}
              alt='Leemart Icon'
              className='drop-shadow shadow-black'
            />
            <h4 className='text-6xl text-blue-600 font-semibold text-center mt-3'>LEEMART</h4>
            <p className="text-center text-xl font-bold text-blue-500">We Care About Your Health</p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-center text-3xl font-semibold mb-8">Our Reputeted Customers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 bg-white p-4 rounded-lg shadow">
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client001.jpg'
                width={200}
                height={200}
                alt='Bal Bhavan'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client002.png'
                width={200}
                height={200}
                alt='AIIMS Logo'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client003.jpeg'
                width={200}
                height={200}
                alt='AIIMS Logo'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client004.jpeg'
                width={200}
                height={200}
                alt='Baptist Convent Sr Sec. School'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client005.png'
                width={200}
                height={200}
                alt='polex International'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client006.jpeg'
                width={200}
                height={200}
                alt='St Stephens School'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client007.png'
                width={200}
                height={200}
                alt='Nestor Pharmaceuticals Ltd'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client008.jpeg'
                width={200}
                height={200}
                alt='PWD Delhi Gov'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client009.png'
                width={200}
                height={200}
                alt='Ministry Of Rural Development'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client010.png'
                width={200}
                height={200}
                alt='Lok Nayak Hospital'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client011.jpg'
                width={200}
                height={200}
                alt='Muncipal Corporation Of Delhi'
                className='w-full'
              />
            </div>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
              <Image
                src='/img/clients/client012.jpg'
                width={200}
                height={200}
                alt='Vardhman Shiksha Niketan'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default page