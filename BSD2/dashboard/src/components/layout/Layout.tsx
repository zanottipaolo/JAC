import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Link from "next/link"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex gap-8'>
      {/* <Header /> */}
      <div className='bg-blue-300 h-screen p-16 flex flex-col gap-8 justify-center'>
        <Link href='/' className='hover:underline'>
          Dashboard
        </Link>
        <Link href='/about' className='hover:underline'>
          About
        </Link>
        <Link href='/contact' className='hover:underline'>
          Contact
        </Link>
      </div>
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
