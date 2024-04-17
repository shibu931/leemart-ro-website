import React from 'react'

const ContactForm = () => {
    return (
        <div className='border border-blue-700/30 rounded-md overflow-hidden shadow-lg lg:sticky top-6 p-4 lg:p-6 form-bg'>
            <h4 className='text-2xl text-blue-950 font-bold text-center mb-5'>Get A Expert Call Back</h4>
            <form>
                <div className="mb-4">
                    <label className="block text-blue-950 text-sm font-bold mb-2" for="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Your Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-950 text-sm font-bold mb-2" for="number">
                        Phone Number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 leading-tight focus:outline-none focus:shadow-outline" id="number" type="tel" placeholder="Enter Your Phone Number" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className='block text-blue-950 text-sm font-bold mb-2'>Your Address</label>
                    <textarea name="message" id="message" className='block shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="2" placeholder='Enter Your Address'></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm