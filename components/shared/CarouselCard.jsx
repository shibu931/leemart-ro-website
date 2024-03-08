"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "@heroicons/react/24/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const CarouselCard = ({ reviews }) => {
    return (
        <Carousel>
            <CarouselContent>
                {
                    reviews.map((item) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="border border-blue-700/20 rounded-lg overflow-hidden">
                                <div className="review-header bg-blue-700/25 flex justify-between p-3">
                                    <span className="font-semibold ">{item.name}</span>
                                    <span className="font-bold">
                                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                                    </span>
                                </div>
                                <div className="review-body border-y-2 bg-white border-blue-700/20 py-5 px-2">
                                    <p className="text-center">{item.comment}</p>
                                </div>
                                <div className="review-footer p-3 flex justify-between bg-blue-700/25">
                                    <span className="my-auto">
                                        <ShieldCheckIcon class="h-6 w-6 text-green-500 inline" /> Verified
                                    </span>
                                    <span className="my-auto">
                                        <Image
                                            src={`/img/${item.provider}.webp`}
                                            width={160}
                                            height={40}
                                            className="w-28"
                                            alt={item.provider}
                                        />
                                    </span>
                                </div>
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default CarouselCard