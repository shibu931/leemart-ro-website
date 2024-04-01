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
        <div className="container py-5 lg:py-10">

          <div className="grid lg:grid-cols-2">
            <div className="my-auto text-center">
              <h1 className="text-4xl lg:text-5xl leading-tight font-semibold">Welcome to Leemart<br /> We Care About Your Health</h1>
              <p className="lg:text-center mt-4 text-justify">Leemart is a dedication to health and purity, not just a water cleaner. Leemart's cutting-edge filtration technology ensures that every drop of water is pure and safe to drink by eliminating pollutants, bacteria, and other impurities. Leemart provides pure water that improves your life with each drink. Take one glass at a time and discover the difference in purity by putting your family's health in the hands of Leemart.</p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
                <div className="mx-auto">
                  <div className="border rounded-lg bg-white/5 border-white/20 shadow-sm shadow-white/20 p-2 flex">
                    <Image className="me-2 w-[45px] h-[45px]" src="/img/google.webp" width={50} height={50} alt="Google" />
                    <div >
                      <p className="text-lg font-normal text-left">Google</p>
                      <span className="font-bold">4.2/5
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-auto">
                  <div className="border rounded-lg bg-white/5 border-white/20 shadow-sm shadow-white/20 p-2 flex">
                    <Image className="me-2 w-[45px] h-[45px]" src="/img/Trustpilot-icon.svg" width={50} height={50} alt="trustpilot" />
                    <div >
                      <p className="text-lg font-normal text-left">Trustpilot</p>
                      <span className="font-bold">4/5
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-auto">
                  <div className="border rounded-lg bg-white/5 border-white/20 shadow-sm shadow-white/20 p-2 flex">
                    <Image className="me-2 w-[45px] h-[45px]" src="/img/review-io.svg" width={50} height={50} alt="Reviews Io" />
                    <div >
                      <p className="text-lg font-normal text-left">Reviews Io</p>
                      <span className="font-bold">4.5/5
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
                        <StarIcon className="h-5 mb-1 w-5 inline text-yellow-400" />
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
          className="banner-wave lg:w-full"
        />
      </div>

      <section>
        <div className="container">
          <div className="grid gap-4 lg:gap-8 lg:grid-cols-2">
            {
              homeCatalog.map((item, index) => (
                <div className="bg-white shadow-2xl hover:border rounded-xl shadow-blue-200/50 p-4 md:p-10" key={index}>
                  <div className="grid sm:grid-cols-2">
                  <div className="mx-auto lg:hidden block">
                      <Image
                        src={`/img/${item.img}`}
                        width={320}
                        height={300}
                        alt="ro-water-purifier"
                      />
                    </div>
                    <div>
                      <h3 className="mb-4 text-2xl font-extrabold text-blue-900">{item.label}</h3>
                      <p className="mb-4 text-gray-600">{item.description}</p>
                      <Button className="bg-blue-500 border hover:bg-blue-600 border-blue-400/20"><Link href={item.href}>View Products</Link></Button>
                    </div>
                    <div className="mx-auto hidden lg:block">
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
        <div className="container">
          <h2 className="text-center text-3xl">Our Services</h2>
          <div className="my-10">
            <div className="bg-white shadow-2xl shadow-blue-200/50 p-5 md:p-6 lg:p-10 rounded-xl grid lg:grid-cols-2 gap-5">
            <div className="mx-auto lg:hidden block">
                <Image
                  src="/img/service_man.png"
                  width={350}
                  height={350}
                  alt="service_man"
                />
              </div>
              <div>
                <h3 className="mb-3 text-blue-900 font-extrabold text-2xl">Ro Water Purifier Service's</h3>
                <p>Our RO Water Purifier Service provides expert maintenance, repairs, and filter replacements to keep your system running smoothly. Our trained technicians keep your water purifier working smoothly for constant access to clean, pure water. Every visit brings peace of mind as we emphasize your family's health and well-being with excellence. We provide customized service for routine maintenance and unexpected situations. Experience the difference with our dedicated RO water purifier servicing, keeping your system efficient for years.</p>
                <Button className="bg-blue-500 hover:bg-blue-600 mt-5">
                  <Link href="/services/ro-water-purifier-service">Learn More</Link>
                </Button>
              </div>
              <div className="mx-auto hidden lg:block">
                <Image
                  src="/img/service_man.png"
                  width={350}
                  height={350}
                  alt="service_man"
                />
              </div>
            </div>
            <div className="bg-white shadow-2xl shadow-blue-200/50 p-5 md:p-6 lg:p-10 rounded-xl grid lg:grid-cols-2 gap-5 mt-5">
            <div className="mx-auto">
                <Image
                  src="/img/industrial_plant.png"
                  width={350}
                  height={350}
                  alt="industrial plant"
                />
              </div>
              <div>
                <h3 className="mb-3 text-blue-900 font-extrabold text-2xl">Industrial Water Plant Service's</h3>
                <p>Unmatched Efficiency with Our Industrial Water Purifier Plant Service. Our experienced technicians maintain, repair, and improve your water filtration plant for optimal performance and industry compliance. We give timely solutions adapted to your plant's unique needs to ensure operational continuity. Trust our devoted team to maintain your plant from routine maintenance to emergency help. We protect your production processes and quality with sustainability and reliability. Improve your industrial water purification system with our skilled service for uninterrupted operations and peace of mind.</p>
                <Button className="bg-blue-500 hover:bg-blue-600 mt-5">
                  <Link href="/services/ro-water-purifier-service">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center text-white">
          <div className="primary-bg border border-blue-900/20 shadow-md shadow-white p-8 rounded-xl grid lg:grid-cols-4 grid-cols-2 gap-8">
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
              uspList.map((item, index) => (
                <div className="p-4 lg:p-8 shadow-lg bg-white shadow-blue-300/20 rounded-xl" key={index}>
                  <div className={`mx-auto mb-4 h-[60px] w-[60px] rounded-full p-3 bg-blue-500`}>
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
        <div className="container px-2">
          <h2 className="text-center text-3xl">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-8 mt-10">
            <div className="lg:col-span-6 lg:col-start-2">
              <CarouselCard reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
``