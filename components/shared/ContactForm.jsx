'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        title: 'New Lead Generate',
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
                        title: 'New Lead Generate',
                        name: '',
                        number: '',
                        address: ''
                    });
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 5000); 
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
        <form onSubmit={(e) => sendForm(e)}>
            <div className="mb-4">
                <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 leading-tight focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'}`} id="name" type="text" placeholder="Enter Your Name" />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="number">
                    Phone Number
                </label>
                <input required value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} className={`shadow appearance-none border rounded w-full py-2 px-3 text-blue-950 leading-tight focus:outline-none focus:shadow-outline ${errors.number && 'border-red-500'}`} id="number" type="tel" placeholder="Enter Your Phone Number" />
                {errors.number && <p className="text-red-500 text-xs italic">{errors.number}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="message" className='block text-blue-950 text-sm font-bold mb-2'>Your Address</label>
                <textarea required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} name="message" id="message" className={`block shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address && 'border-red-500'}`} rows="2" placeholder='Enter Your Address'></textarea>
                {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
            </div>
                {successMessage && <div className="text-green-500 font-semibold mb-2">{successMessage}</div>}
                {errors.sendMailError && <p className="text-red-500 text-sm font-semibold mb-2">{errors.sendMailError}</p>}
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
