import Header from '@/components/shared/Header'
import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <section className='my-0'>
      <Header title={"Contact Us"} />
      <div className="container py-10 lg:py-20">
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div className='lg:p-10 p-5'>
            <h3 className='text-blue-500 text-4xl font-bold mb-8'>Get In Touch</h3>
            <form action="" className='lg:pe-24 md:pe-12'>
              <div className='mb-3'>
                <label htmlFor="name" className='-mb-4 block'>Enter Your Name</label><br/>
                <input type="text" placeholder='John Dee' id='name' name='name' className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className='mb-3'>
                <label htmlFor="phone" className='-mb-4 block'>Enter Your Number</label><br/>
                <input type="number" placeholder='+91 123 123 1234' id='phone' name='phone' className='shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className='-mb-4 block'>Enter Your Message</label><br/>
                <textarea name="message" id="message" className='block shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="5"></textarea>
              </div>
              <Button className="bg-blue-500 border hover:bg-blue-600 border-blue-400/20 block w-full">Submit</Button>
            </form>
          </div>
          <div className='bg-blue-400 p-5 lg:p-10'>
            <div className="border-2 overflow-hidden rounded-md shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0606978799615!2d77.27489387535827!3d28.627942875667163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce352dc1a1cfd%3A0x2dfa778fc87245d1!2sD.S.%20Corporations!5e0!3m2!1sen!2sin!4v1712076520425!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact