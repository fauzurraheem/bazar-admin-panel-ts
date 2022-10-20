import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import { ToastContainer } from 'react-toastify';


type Props = {
  children: ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <>
        {/* <ToastContainer /> */}
        <Navbar />
        <Sidebar />
        {children}
    </>
  )
}

export default Layout