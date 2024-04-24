import ContactForm from '@/components/shared/ContactForm'
import Header from '@/components/shared/Header'
import React from 'react'

const page = ({ params }) => {
    const title = params.slug.toUpperCase().replaceAll('-', ' ')
  return (
    <>
        <Header title={title}/>
        <section>
          <div className="container bg-white rounded-lg border-2 p-3 md:p-6 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-5 lg:gap-10">
              <div className="col-span-1 md:col-span-3 p-3 lg:p-8 relative lg:hidden block">       
              <div className='border border-blue-700/30 rounded-md overflow-hidden shadow-lg lg:sticky top-6 p-4 lg:p-6 form-bg'>
                  <h4 className='text-2xl text-blue-950 font-bold text-center mb-5'>Get A Expert Call Back</h4>
                  <ContactForm/>
                </div>  
              </div>
              <div className="col-span-1 md:col-span-5 my-auto text-justify px-3">
                <span className='text-xl text-blue-600 font-semibold block mb-3'>Improving Water Quality:</span>
                <h1 className='text-4xl font-bold text-blue-950 mb-5 text-left'>Leemart's All-Inclusive RO Water Purifier Maintenance, Setup, & Services</h1>
                <p className='mb-10'>It is imperative to have a dependable and effective water filtration system in this day and age where water quality is being scrutinized more and more. Because they have the best filtration capabilities among all the alternatives available, RO (Reverse Osmosis) water purifiers have become the preferred solution for many homes and businesses. In this context, the well-known brand in the business, Leemart, commands attention for its extensive line of RO water purifiers and related installation, maintenance, and repair services.</p>
                <h2 className="mb-5 text-3xl font-bold text-blue-950 text-left">Full Range of Services Provided by Leemart</h2>
                <p className="mb-4"><strong>Installation Excellence:</strong> A water purification system's ability to operate effectively depends on its proper installation. A group of exceptionally talented specialists at Leemart are experts at installing RO water purifiers without a hitch. The professionals at Leemart go above and beyond to provide faultless installations that are customized to meet each customer's specific needs, from determining the best location to guaranteeing correct plumbing and electrical connections.</p>
                <p className="mb-4"><strong>Quick and Effective Repair Services:</strong> Problems can occasionally arise with even the most sophisticated equipment. In order to handle any issues, Leemart provides quick and effective repair services since it recognizes the value of a timely response. The skilled specialists at Leemart use their experience to identify and carefully fix any operational issue, be it a broken part, a blocked filter, or anything else.</p>
                <p className='mb-4'><strong>Genuine Genuine Spares and Components:</strong> Using genuine spare parts and components during repair and maintenance is essential to guaranteeing the purifier's longevity and functionality. With every repair operation, Leemart guarantees dependability and longevity by procuring only the best parts.</p>
                <p className='mb-10'><strong>Regular Maintenance Packages:</strong> Leemart provides comprehensive maintenance packages that are customized to meet the needs of each customer in order to help them keep ahead of any problems and guarantee optimal performance. Periodic maintenance, filter changes, and comprehensive inspections are all included in these packages to maintain the purifier's optimal performance all year long.</p>
                <h3 className="mb-5 text-3xl font-bold text-blue-950 text-left">A Customer-First Mentality</h3>
                <p className='mb-10'>A strong dedication to client satisfaction is at the core of Leemart's concept. At every stage of the process, from the moment a customer contacts Leemart for installation to the prompt resolution of any repair concerns, transparency, dependability, and professionalism are given first priority. Leemart strives to not only meet but beyond the expectations of its esteemed clientele by adopting a customer-centric strategy.</p>
                <h3 className="mb-5 text-3xl font-bold text-blue-950 text-left">Conclusion</h3>
                <p className="mb-10">In a world where having access to safe and clean drinking water is essential, Leemart stands out as a leader in the industry by providing not only cutting-edge RO water purifiers but also unmatched installation, maintenance, and repair services. You may feel secure knowing that your water purification requirements are being handled by professionals committed to providing nothing less than excellence when Leemart is on your side.</p>
              </div>
              <div className="col-span-1 md:col-span-3 p-3 lg:p-8 relative hidden lg:block">     
                <div className='border border-blue-700/30 rounded-md overflow-hidden shadow-lg lg:sticky top-6 p-4 lg:p-6 form-bg'>
                  <h4 className='text-2xl text-blue-950 font-bold text-center mb-5'>Get A Expert Call Back</h4>
                  <ContactForm/>
                </div>  
              </div>
            </div>
          </div>
        </section>
        <section>

        </section>
    </>
  )
}

export default page