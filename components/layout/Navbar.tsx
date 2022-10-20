import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import Link from 'next/link';
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {AiOutlineShop} from 'react-icons/ai'
import {BsShop} from 'react-icons/bs'
import {RiListSettingsLine} from 'react-icons/ri'
import {FaCubes} from 'react-icons/fa'
import {BsFilesAlt} from 'react-icons/bs'
import {BsTag} from 'react-icons/bs'
import {BiBook} from 'react-icons/bi'
import {BiPen} from 'react-icons/bi'
import {TbFileTime} from 'react-icons/tb'
import {TbCalendarTime} from 'react-icons/tb'
import {BsPeople} from 'react-icons/bs'
import {GoPackage} from 'react-icons/go'
import {TbReceiptTax} from 'react-icons/tb'
import {MdOutlineLocalShipping} from 'react-icons/md'
import {GrAtm} from 'react-icons/gr'
import {RiRefund2Fill} from 'react-icons/ri'
import {BsQuestionCircle} from 'react-icons/bs'
import {MdOutlineReviews} from 'react-icons/md'
import {AiOutlineGift} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'
import { useRouter } from 'next/router';
import { auth } from '../../firebase.config';
import { Dropdown, Menu} from 'antd';




type navbarProps={}
const Navbar = () => {
  const {pathname} = useRouter()
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const menu = (
    <div className=' bg-white text-gray-500 '>
      <div className='text-white bg-emerald-500 p-2 '>
        <span >{auth.currentUser?.displayName}</span>
        <span className='text-xs'>{auth.currentUser?.email}</span>
      </div>
      <Link href={'/profile'}>
      <p className='m-0 font-semibold py-2 px-2 cursor-pointer hover:text-emerald-500'>Profile</p>
      </Link>
      <hr className=' border-gray-200'/>
      <p className='m-0 font-semibold py-2 px-2 cursor-pointer hover:text-emerald-500' onClick={() => auth.signOut()} >LogOut</p>
    </div> 
   )

 
  return (
    <>
    <div className={`${pathname === '/login' && 'hidden'} h-16 flex justify-between px-6 items-center text-sm fixed  top-0 w-full bg-white z-10 shadow`}>
      <div className='lg:hidden'>
      <Button type="text" onClick={showDrawer} >
        <AiOutlineMenu size={30} />
      </Button>
      </div>
      <Link href={'/'}>
        <h1 className='text-2xl text-center text-emerald-500 hidden lg:block cursor-pointer'>FALZ-STORE</h1>
      </Link>
      <div className='relative'>
        <button className='bg-emerald-600 font-semibold w-32 py-2 text-gray-50 rounded-md mr-4'>Create Shop</button>
        <Dropdown overlay={menu} placement={'bottomLeft'} trigger={['click']} overlayClassName=' max-w-[250px] left-0 rounded-md overflow-hidden shadow bg-white absolute'>
        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white"  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </Dropdown>
      </div>
      
    </div>
    <Drawer title={<div>pickbaza</div>} placement="left" onClose={onClose} open={open}>
    <ul>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <MdOutlineDashboardCustomize size={25} />
            <span className='m-0 ml-4'>Dashboard</span>
          </li>
        </Link>
        <Link href={'/shop'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <AiOutlineShop size={25} />
            <span className='m-0 ml-4'>Shop</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <BsShop size={25} />
            <span className='m-0 ml-4'>My Shops</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <GoPackage size={25} />
            <span className='m-0 ml-4'>Products</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <RiListSettingsLine size={25} />
            <span className='m-0 ml-4'>Attributes</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <FaCubes size={25} />
            <span className='m-0 ml-4'>Groups</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <BsFilesAlt size={25} />
            <span className='m-0 ml-4'>Categories</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <BsTag size={25} />
            <span className='m-0 ml-4'>Tags</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <div>
             <BiBook size={25} />
            </div>
            <span className='m-0 ml-4'>Manufacturers/Publications</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <BiPen size={25} />
            <span className='m-0 ml-4'>Authors</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <TbFileTime size={25} />
            <span className='m-0 ml-4'>Orders</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <TbCalendarTime size={25} />
            <span className='m-0 ml-4'>Order Status</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <BsPeople size={25} />
            <span className='m-0 ml-4'>Users</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <AiOutlineGift size={25} />
            <span className='m-0 ml-4'>Coupons</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <TbReceiptTax size={25} />
            <span className='m-0 ml-4'>Taxes</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <MdOutlineLocalShipping size={25} />
            <span className='m-0 ml-4'>Shippings</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <GrAtm size={25} />
            <span className='m-0 ml-4'>Withdrawals</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <RiRefund2Fill size={25} />
            <span className='m-0 ml-4'>Refund</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <BsQuestionCircle size={25} />
            <span className='m-0 ml-4'>Questions</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <MdOutlineReviews size={25} />
            <span className='m-0 ml-4'>Reviews</span>
          </li>
        </Link>
        <Link href={'/'}>
          <li className='flex items-center text-lg active:text-emerald-500 cursor-pointer text-gray-700 py-4'>
            <AiOutlineSetting size={25} />
            <span className='m-0 ml-4'>Settings</span>
          </li>
        </Link>
      </ul>
      </Drawer>
    </>
    
  )
}

export default Navbar