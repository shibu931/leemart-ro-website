'use client'
import Header from '@/components/shared/Header'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        title: 'Contact Us',
        name: '',
        number: '',
        address: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.number.trim()) {
            errors.number = 'Phone number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.number.trim())) {
            errors.number = 'Invalid phone number';
            isValid = false;
        }

        if (!formData.address.trim()) {
            errors.address = 'Address is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const sendForm = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch("/api/sendMail", {
                    method: "POST",
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    setSuccessMessage('Form submitted successfully!');
                    setFormData({
                        title: 'Contact Us',
                        name: '',
                        number: '',
                        address: ''
                    });
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 5000); // Clear success message after 5 seconds
                } else {
                    throw new Error('Failed to submit form');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrors({ sendMailError: 'Something went wrong. Please try again.' });
            }
        }
    };

    return (
        <section className='my-0'>
            <Header title={"Contact Us"} />
            <div className="container py-10 lg:py-20">
                <div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                    <div className='lg:p-10 p-5'>
                        <h3 className='text-blue-500 text-4xl font-bold mb-8'>Get In Touch</h3>
                        <form onSubmit={(e) => sendForm(e)} className='lg:pe-24 md:pe-12'>
                            <div className='mb-3'>
                                <label htmlFor="name" className='-mb-4 block'>Enter Your Name</label><br />
                                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='John Dee' id='name' name='name' className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'}`} />
                                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="phone" className='-mb-4 block'>Enter Your Number</label><br />
                                <input type="tel" required value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} placeholder='+91 123 123 1234' id='phone' name='phone' className={`shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.number && 'border-red-500'}`} />
                                {errors.number && <p className="text-red-500 text-xs italic">{errors.number}</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className='-mb-4 block'>Enter Your Message</label><br />
                                <textarea required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} name="message" id="message" className={`block shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address && 'border-red-500'}`} rows="5"></textarea>
                                {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
                            </div>
                            <Button className="bg-blue-500 border hover:bg-blue-600 border-blue-400/20 block w-full" type="submit">Submit</Button>
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
