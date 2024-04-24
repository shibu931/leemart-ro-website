import { sendEmail } from "@/utils/mailer"
import { NextResponse } from "next/server"


export async function POST(request) {
    try {
        const data = await request.json();
        const message = {
            subject: data.title,
            body: ` <div style="margin: 20px; padding: 20px; border: 1px solid #ddd; border-radius: 5px; font-family: Arial, sans-serif;">
        <h2 style="color: #333;">Lead Details</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Number:</strong> ${data.number}</p>
        <p><strong>Address:</strong> ${data.address}</p>
    </div>`
        }
        sendEmail(message)
        throw new Error("")
        return NextResponse.json({message:"Successful"}, { status: 200 })
    } catch (error) {
        return NextResponse.json({message:"Something Went Wrong"}, { status: 500 })
    }
}