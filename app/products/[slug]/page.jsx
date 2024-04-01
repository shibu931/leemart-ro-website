"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { productData } from '@/utils/data'
import Image from 'next/image'
import Header from '@/components/shared/Header'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"


const page = ({ params }) => {
    const title = params.slug.toUpperCase().replaceAll('-', ' ')
    const [productList, setProductList] = useState(productData.filter(product=>{if(product.productCategory.includes(title.trim().split(/\s+/)[0])){ return true} return false  }))
    const [price, setPrice] = useState(26000)
    const [installationTypeFilters, setInstallationTypeFilters] = useState([]);
    const [purificationTechnologyFilters, setPurificationTechnologyFilters] = useState([]);
    const [roFeaturesFilters, setRoFeaturesFilters] = useState([]);
    const [sortBy, setSortBy] = useState(null);

    console.log(productList);

    // Function to filter products based on selected filters
    const filterProducts = () => {
        let filteredProducts = productList.filter(product => {
            if (product.productPrice > price) return false;

            if (installationTypeFilters.length > 0 && !installationTypeFilters.includes(product.installationType)) return false;

            if (purificationTechnologyFilters.length > 0 && !purificationTechnologyFilters.includes(product.purificationTechnology)) return false;

            if (roFeaturesFilters.length > 0 && !roFeaturesFilters.some(filter => product.roFeatures.includes(filter))) return false;

            return true;
        });

        setProductList(filteredProducts);
    };

    const sortProducts = (products) => {
        if (sortBy === 'none') {
            return products;
        } else if (sortBy === 'pricelowtohigh') {
            return [...products].sort((a, b) => a.productPrice - b.productPrice);
        } else if (sortBy === 'pricehightolow') {
            return [...products].sort((a, b) => b.productPrice - a.productPrice);
        } else if (sortBy === 'a-z') {
            return [...products].sort((a, b) => a.productName.localeCompare(b.productName));
        } else if (sortBy === 'z-a') {
            return [...products].sort((a, b) => b.productName.localeCompare(a.productName));
        } else {
            return [...products];
        }
    };

    const handleSortChange = (value) => {
        setSortBy(value);
    };

    useEffect(() => {
        filterProducts();
    }, [price, installationTypeFilters, purificationTechnologyFilters, roFeaturesFilters]);

    useEffect(() => {
        setProductList(sortProducts(productList));
    }, [sortBy]);


    return (
        <section className='my-0'>
            <Header title={title} />
            <div className='py-10 container'>
                <div className="grid md:grid-cols-12 gap-4 lg:gap-10 relative">
                    <div className='md:col-span-4 lg:col-span-3 '>
                        <div className='filters-drawer md:px-5 lg:px-8'>
                            <div className='mb-5'>
                                <span className='font-medium text-lg block mb-3'>Sort By</span>
                                <RadioGroup defaultValue="comfortable" onValueChange={(value)=>{handleSortChange(value)}}>
                                    <div className="flex items-center justify-between">
                                        <Label className="font-normal" htmlFor="popularity">None</Label>
                                        <RadioGroupItem value="none" id="popularity" />
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
                            <hr />
                            <div className='mb-5'>
                                <span className='font-medium text-lg block mb-3'>Filter By Price</span>
                                <Slider defaultValue={[15000]} onValueChange={(value) => { setPrice(value) }} min={5000} max={26000} step={1} />
                                <span className='font-medium text-md text-gray-500 block mt-2'>₹5000 - ₹{price}</span>
                            </div>
                            {/* <hr />
                            <div className="">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='font-medium text-lg hover:no-underline'>Installation Type</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="wall-mounted"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Wall Mounted
                                                </label>
                                                <Checkbox id="wall-mounted" />
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="under-the-counter"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Under The Counter
                                                </label>
                                                <Checkbox id="under-the-counter" />
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="counter-top"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Counter Top
                                                </label>
                                                <Checkbox id="counter-top" />
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <hr />
                            <div className="">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='font-medium text-lg hover:no-underline'>Purification Technology</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="ro+uv+uf+tds_control"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    RO + UV + UF + TDS Control
                                                </label>
                                                <Checkbox id="ro+uv+uf+tds_control" />
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="ro+uf+tds_control"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    RO + UF + TDS Control
                                                </label>
                                                <Checkbox id="ro+uf+tds_control" />
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <hr />
                            <div className="mb-5">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='font-medium text-lg hover:no-underline'>RO Features</AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="best_selling"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Best Selling
                                                </label>
                                                <Checkbox id="best_selling" />
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="zero_water_wastage_technology"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Zero Water Wastage Technology
                                                </label>
                                                <Checkbox id="zero_water_wastage_technology" />
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="next_gen_ro_technology"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Next Gen RO Technology
                                                </label>
                                                <Checkbox id="next_gen_ro_technology" />
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="detachable_storage_tank"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Detachable Storage Tank
                                                </label>
                                                <Checkbox id="detachable_storage_tank" />
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 mb-3">
                                                <label
                                                    htmlFor="attachment_with_water_cooler"
                                                    className="text-sm font-medium text-slate-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Attachment with Water Cooler
                                                </label>
                                                <Checkbox id="attachment_with_water_cooler" />
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div> */}
                        </div>
                    </div>
                    <div className='md:col-span-8 lg:col-span-9'>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                            {
                                productList.map((product) => (
                                    <div className="rounded-lg text-center bg-white border shadow-xl shadow-blue-400/10 border-black/20 p-4 lg:p-6">
                                        <div className='mb-8'><h4 className='mb-3 font-medium text-xl'>{product.productName}</h4>
                                            <p className='text-gray-700 h-[50px] overflow-hidden'>{product.productFeature}</p>
                                            <Image
                                                src={product.productImage}
                                                width={200}
                                                height={260}
                                                alt={product.name}
                                                className='mx-auto'
                                            /></div>
                                        <div className='text-center my-2'>  
                                            <p className='font-medium'>MRP : ₹{product.productPrice}</p>
                                        </div>
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