import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import MobileNav from '@/components/shared/MobileNav'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leemart',
  description: 'We provide water purifiers and spare parts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar/>
        <MobileNav/>
        <main>
          {children}
        </main>
        <Footer/>
        <a className='fixed bottom-5 right-6 animate-bounce' target='_blank' href='https://api.whatsapp.com/send?phone=918076602998&text=Hello,%20%0A%20I%20have%20a%20question'>
          <Image
            src="/img/whatsapp.svg"
            width="60"
            height="60"
            alt="Whatsapp Logo"
          />
        </a>
      </body>
    </html>
  )
}
