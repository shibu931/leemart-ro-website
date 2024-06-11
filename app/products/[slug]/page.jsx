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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from '@/components/shared/ContactForm'


const page = ({ params }) => {
    const title = params.slug.toUpperCase().replaceAll('-', ' ')
    const [defaultProducts, setDefaultProducts] = useState(productData.filter(product => { if (product.productCategory.includes(title.trim().split(/\s+/)[0])) { return true } return false }))
    const [productList, setProductList] = useState(productData.filter(product => { if (product.productCategory.includes(title.trim().split(/\s+/)[0])) { return true } return false }))
    const [price, setPrice] = useState(26000)
    const [installationTypeFilters, setInstallationTypeFilters] = useState([]);
    const [purificationTechnologyFilters, setPurificationTechnologyFilters] = useState([]);
    const [roFeaturesFilters, setRoFeaturesFilters] = useState([]);
    const [sortBy, setSortBy] = useState(null);


    // Function to filter products based on selected filters
    const filterProducts = () => {
        let filteredProducts = defaultProducts.filter(product => {
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
                <div className="grid md:grid-cols-12 gap-4 lg:gap-8 relative">
                    <div className='md:col-span-4 lg:col-span-3 relative'>
                        <div className='filters-drawer lg:sticky md:px-5 top-6  lg:px-8'>
                            <div className='mb-5'>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='font-medium text-sm hover:no-underline'>Sort By</AccordionTrigger>
                                        <AccordionContent className="mt-4">
                                            <RadioGroup defaultValue="comfortable" onValueChange={(value) => { handleSortChange(value) }}>
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
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <hr />
                            <div className='mb-5'>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='font-medium text-sm hover:no-underline'>Filter By Price</AccordionTrigger>
                                        <AccordionContent className="mt-4">
                                            <Slider defaultValue={[26000]} onValueChange={(value) => { setPrice(value) }} min={5000} max={26000} step={1} />
                                            <span className='font-medium text-md text-gray-500 block mt-2'>₹5000 - ₹{price}</span>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            {
                                productList.map((product) => (
                                    <div className={`rounded-lg text-center bg-white border shadow-xl shadow-blue-400/10 border-black/20 p-4 lg:p-6 ${product.productPrice == '0' ? 'col-span-2' : ''}`}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className='p-2'>
                                                <Image
                                                    src={product.productImage}
                                                    width={200}
                                                    height={260}
                                                    alt={product.name}
                                                    className={`mx-auto ${product.productPrice == '0' ? 'w-[300px]' : ''}`}
                                                />
                                            </div>
                                            <div className='h-full'>
                                                <div className='mb-4'>
                                                    <h4 className='mb-3 font-semibold text-left text-lg'>{product.productName}</h4>
                                                    <ul className='text-left text-sm list-disc ps-4'>
                                                        {
                                                            product.productFeature.map((feature, index) => (
                                                                <li key={index} className='mb-1'>{feature}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                {
                                                    product.productCategory == 'RO' ? (
                                                        <>
                                                            <div className='my-2'>
                                                                <p className='font-semibold text-left'>MRP : ₹{product.productPrice}</p>
                                                            </div>

                                                            <div className='flex mt-3'>
                                                                    <Dialog>
                                                                        <DialogTrigger className='bg-blue-800 mx-2 rounded-md text-white font-medium p-2'>Order Now</DialogTrigger>
                                                                        <DialogContent>
                                                                            <DialogHeader>
                                                                                <DialogTitle>Request A Call Back</DialogTitle>
                                                                                <DialogDescription>
                                                                                    <ContactForm/>
                                                                                </DialogDescription>
                                                                            </DialogHeader>
                                                                        </DialogContent>
                                                                    </Dialog>

                                                                </div>

                                                            {/*
                                                            ============ Amazon And Flipkart Buy Button ===============
                                                            <div className='flex mt-3'>
                                                                <Link href="#" className='bg-blue-500 hover:bg-blue-600 focus:bg-blue-500 border-blue-700 border me-2 rounded-md text-white font-medium p-2'>
                                                                    Buy On
                                                                    <Image
                                                                        src="/img/flipkart-logo.png"
                                                                        width={20}
                                                                        height={20}
                                                                        alt='Flipkart Logo'
                                                                        className='inline ms-2'
                                                                    />
                                                                </Link>
                                                                <Link href="#" className='bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 border border-gray-600 rounded-md text-black font-medium p-2'>
                                                                    Buy On
                                                                    <Image
                                                                        src="/img/amazon-icon.svg"
                                                                        width={20}
                                                                        height={20}
                                                                        alt='amazon Logo'
                                                                        className='inline ms-2'
                                                                    />
                                                                </Link>
                                                            </div> */}
                                                        </>
                                                    ) :
                                                        (
                                                            <>
                                                                <div className='flex mt-3'>
                                                                    <Dialog>
                                                                        <DialogTrigger className='bg-blue-800 mx-2 rounded-md text-white font-medium p-2'>Get A Quote</DialogTrigger>
                                                                        <DialogContent>
                                                                            <DialogHeader>
                                                                                <DialogTitle>Request A Call Back</DialogTitle>
                                                                                <DialogDescription>
                                                                                    <ContactForm/>
                                                                                </DialogDescription>
                                                                            </DialogHeader>
                                                                        </DialogContent>
                                                                    </Dialog>

                                                                </div>
                                                            </>
                                                        )
                                                }
                                            </div>
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