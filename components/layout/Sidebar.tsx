import Link from 'next/link'
import React from 'react'
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
import { useRouter } from 'next/router'





const Sidebar = () => {
  const {pathname} = useRouter()
  console.log(pathname)


  return (
    <section className={`${pathname === '/login' && 'hidden'} ${pathname !== '/login' && 'lg:block'}  h-screen pt-16 w-96 bg-white overflow-y-auto fixed  px-4 bottom-0 hidden`}>
      <div>
        {pathname !== '/kdoedkoe' && (
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
        )}
        {pathname === '/ghffhf' && (
          <h1>hii</h1>
        )}
      </div>
      
    </section>
  )
}

export default Sidebar