import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import { ToastContainer } from 'react-toastify';


type Props = {
  children: ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div className='h-screen overflow-y-auto bg-gray-100' >
        {/* <ToastContainer /> */}
        <Navbar />
        <Sidebar />
        {children}
    </div>
  )
}

export default Layout