import Link from 'next/link'
import React from 'react'
import { productData } from '@/utils/data'
import Image from 'next/image'

const page = ({params}) => {
    const title = params.slug.toUpperCase().replaceAll('-',' ')
    return (
        <section className='my-0'>
            <div className='primary-bg h-[200px] flex w-full'>
                <div className='text-3xl m-auto text-white'>
                    <Link href="/" className='font-light underline underline-offset-4'>Home</Link>
                    <span className='font-normal text-4xl'> / </span>
                    <span>{title}</span>
                </div>
            </div>
            <div className='pt-10 container'>
                <div className="grid md:grid-cols-12 gap-4 lg:gap-10 relative">
                    <div className='md:col-span-4 lg:col-span-3 fixed top-0'>

                    </div>
                    <div className='md:col-span-8 lg:col-span-9'>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                            {
                                productData.map((product)=>(
                                    <div className="rounded-lg text-center bg-white border shadow-xl shadow-blue-400/10 border-black/20 p-4 lg:p-6">
                                        <div className='mb-8'><h4 className='mb-3 font-medium text-xl'>{product.productName}</h4>
                                        <p className='text-gray-700 h-[55px] overflow-ellipsis'>{product.productFeature}</p>
                                        <Image
                                            src={product.productImage}
                                            width={200}
                                            height={260}
                                            alt={product.name}
                                            className='mx-auto'
                                        /></div>
                                        <div className='flex mt-auto'>
                                            <Link href="#" className='bg-blue-800 w-2/4  mx-2 rounded-md text-white font-medium p-2'>View</Link>
                                            <Link href="#" className='bg-black w-1/4  mx-2 rounded-md text-white font-medium p-2'>
                                                <Image
                                                    src="/img/flipkart-logo.png"
                                                    width={20}
                                                    height={20}
                                                    alt='Flipkart Logo'
                                                    className='w-5 h-5 mx-auto'
                                                />
                                            </Link>
                                            <Link href="#" className='bg-gray-300 border border-gray-600 w-1/4  mx-2 rounded-md text-white font-medium p-2'><Image
                                                    src="/img/amazon-icon.svg"
                                                    width={20}
                                                    height={20}
                                                    alt='amazon Logo'
                                                    className='w-5 h-5 m-auto'
                                                /></Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page