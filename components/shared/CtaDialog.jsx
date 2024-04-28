import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ContactForm from './ContactForm'

const CtaDialog = () => {
    return (
        <Dialog>
            <DialogTrigger className='bg-blue-800 mx-2 rounded-md text-white font-medium p-2'>Contact Us</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Request A Call Back</DialogTitle>
                    <DialogDescription>
                        <ContactForm/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CtaDialog