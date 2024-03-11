"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { productData } from '@/utils/data'
import Image from 'next/image'
import Header from '@/components/shared/Header'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"



const page = ({ params }) => {
    const title = params.slug.toUpperCase().replaceAll('-', ' ')
    const [productList, setProductList] = useState(productData)

    return (
        <section className='my-0'>
            <Header title={title} />
            <div className='py-10 container'>
                <div className="grid md:grid-cols-12 gap-4 lg:gap-10 relative">
                    <div className='md:col-span-4 lg:col-span-3 '>
                        <div className='filters-drawer md:px-5 lg:px-8'>
                            <div className='mb-4'>
                                <span className='font-medium text-lg block mb-4'>Sort By</span>
                                <RadioGroup defaultValue="comfortable">
                                    <div className="flex items-center justify-between">
                                        <Label className="font-normal" htmlFor="popularity">Popularity</Label>
                                        <RadioGroupItem value="popularity" id="popularity" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label className="font-normal" htmlFor="pricelowtohigh">Price Low to High</Label>
                                        <RadioGroupItem value="pricelowtohigh" id="pricelowtohigh" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label className="font-normal" htmlFor="pricehightolow">Price High to Low</Label>
                                        <RadioGroupItem value="pricehightolow" id="pricehightolow" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label className="font-normal" htmlFor="alphabeticala-z">Alphabetical (A-Z)</Label>
                                        <RadioGroupItem value="a-z" id="alphabeticala-z" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label className="font-normal" htmlFor="alphabeticalz-a">Alphabetical (Z-A)</Label>
                                        <RadioGroupItem value="z-a" id="alphabeticalz-a" />
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className='mb-4'>
                                <span className='font-medium text-lg block mb-4'>Sort By</span>
                                <Slider defaultValue={[33]} max={100} step={1} />
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-8 lg:col-span-9'>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                            {
                                productList.map((product) => (
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