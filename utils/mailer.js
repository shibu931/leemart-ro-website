import nodemailer from 'nodemailer';

export const sendEmail = async (message)=>{
    try {
        var transport = nodemailer.createTransport({
            pool: true,
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
              user:'info@leemart.co.in',
              pass: 'Vikas@807',
            },
            maxConnections: 1
          });
        const mailOptions ={
            from:'info@leemart.co.in',
            to:'itzshippu@gmail.com',
            subject:message.subject,
            html:message.body
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error) {
        console.log(error.message)
    }
}