import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import CarouselCard from "@/components/shared/CarouselCard";
import { homeCatalog, reviews, uspList } from "@/utils/constants";


export default function Home() {
  return (
    <>
      <div className="hero-banner text-white">
        <div className="container lg:py-10">

          <div className="grid lg:grid-cols-2">
            <div className="my-auto text-center">
              <h1 className="text-5xl leading-tight font-semibold">Welcome to Leemart<br /> <span className="text-4xl">Your Source for Pure, Refreshing Water</span></h1>
              <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, accusantium rerum inventore illum mollitia officia libero commodi nisi nam velit quia vel fugit culpa quis aspernatur amet</p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8">
                <div className="mx-auto">
                  <div className="border rounded-lg bg-white/5 border-white/20 shadow-sm shadow-white/20 p-2 flex">
                    <Image className="me-2 w-[45px] h-[45px]" src="/img/google.webp" width={50} height={50} alt="Google" />
                    <div >
                      <p className="text-lg font-normal text-left">Google</p>
                      <span className="font-bold">4.9/5
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-auto">

                  <div className="border rounded-lg bg-white/5 border-white/20 shadow-sm shadow-white/20 p-2 flex">
                    <Image className="me-2 w-[45px] h-[45px]" src="/img/Trustpilot-icon.svg" width={50} height={50} alt="trustpilot" />
                    <div >
                      <p className="text-lg font-normal text-left">Trustpilot</p>
                      <span className="font-bold">4.4/5
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-auto">
                  <div className="border rounded-lg bg-white/5 border-white/20 shadow-sm shadow-white/20 p-2 flex">
                    <Image className="me-2 w-[45px] h-[45px]" src="/img/review-io.svg" width={50} height={50} alt="Reviews Io" />
                    <div >
                      <p className="text-lg font-normal text-left">Reviews Io</p>
                      <span className="font-bold">4.9/5
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon class="h-5 mb-1 w-5 inline text-yellow-400" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/img/banner-ro.png"
                width={320}
                height={380}
                alt="ro-water-purifier"
                className="w-full md:w-4/6 m-auto"
              />
            </div>
          </div>

        </div>

        <Image
          src="/img/banner.png"
          width={1920}
          height={100}
          alt="waves"
          className="banner-wave"
        />
      </div>

      <section>
        <div className="container">
          <div className="grid gap-4 lg:gap-8 lg:grid-cols-2">
            {
              homeCatalog.map((item,index) => (
                <div className="bg-white shadow-2xl hover:border rounded-xl shadow-blue-200/50 p-4 md:p-10" key={index}>
                  <div className="grid sm:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-2xl font-extrabold text-blue-900">{item.label}</h3>
                      <p className="mb-4">{item.description}</p>
                      <Button className="bg-blue-500 border hover:bg-blue-600 border-blue-400/20"><Link href={item.href}>Learn More</Link></Button>
                    </div>
                    <div className="mx-auto">
                      <Image
                        src={`/img/${item.img}`}
                        width={320}
                        height={300}
                        alt="ro-water-purifier"
                      />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center text-white">
          <div className="primary-bg border border-blue-900/20 shadow-md shadow-white p-4 md:p-8 rounded-xl grid lg:grid-cols-4 md:grid-cols-2">
            <div className="lg:px-10">
              <h3 className="text-4xl font-bold mb-3">1200+</h3>
              <p>Satisfied clients love our reliable, pure water solutions. </p>
            </div>
            <div className="lg:px-10">
              <h3 className="text-4xl font-bold mb-3">20</h3>
              <p>Years of innovation led to Leemart superior technology. </p>
            </div>
            <div className="lg:px-10">
              <h3 className="text-4xl font-bold mb-3">95%</h3>
              <p>Positive feedback for Leemart water purity assurance. </p>
            </div>
            <div className="lg:px-10">
              <h3 className="text-4xl font-bold mb-3">100+</h3>
              <p>Water purification solution's for every kind of needs</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <h2 className="text-3xl">Our Usp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mt-10 lg:px-10">
            {
              uspList.map((item,index) => (
                <div className="p-4 lg:p-8 shadow-lg bg-white shadow-blue-300/20 rounded-xl" key={index}>
                  <div className={`mx-auto mb-4 h-[60px] w-[60px] rounded-full p-3 ${item.color}`}>
                    <Image src={item.img} className="m-auto" width={40} height={40} alt="Usp" />
                  </div>
                  <h3 className="text-2xl text-blue-900 mb-2 font-semibold">{item.title}</h3>
                  <p className="text-gray-800">{item.content}</p>
                </div>
              ))
            }

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="text-center text-3xl">Testimonials</h2>
          <div className="grid md:grid-cols-8 mt-10">
            <div className="col-span-6 col-start-2">
              <CarouselCard reviews={reviews}/>
            </div>
          </div>
        </div>  
      </section>

      <section className="mb-0 pb-10">
          <div className="container">
            <h2 className="text-center text-3xl">Our Well Known Reputeted Clients</h2>
            <div className="mt-8">

            </div>
          </div>
      </section>

    </>
  )
}
``