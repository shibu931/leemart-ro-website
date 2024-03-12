import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import MobileNav from '@/components/shared/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LeeMart',
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
      </body>
    </html>
  )
}
