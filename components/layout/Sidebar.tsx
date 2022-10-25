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
import { auth } from '../../firebase.config'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';





const Sidebar = () => {
  const {pathname} = useRouter()
  console.log(auth.currentUser)


  return (
    <section className={`${pathname === '/login' && 'hidden'} ${pathname !== '/login' && 'lg:block'}  h-screen pt-16 w-96 bg-white overflow-y-auto fixed  px-4 bottom-0 hidden shadow-md `}>
      <div className={`${pathname === '/shops/create' && ''}`}>
        {pathname !== '/shops/create' && (
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
        {pathname === '/shops/create' && (
          <div className='flex flex-col items-center justify-center pt-20 text-gray-400 space-y-3'>
            <Avatar size={100} icon={<UserOutlined />} />
            <div className='text-center '>
              <p className='text-base m-0 text-gray-600 font-medium'>{auth.currentUser?.displayName}Customer</p>
              <p className='text-base m-0'>{auth.currentUser?.email}</p>
              <p className='text-base m-0'>{}</p>
            </div>
            <div className='border border-gray-300 rounded py-2 px-4'>disabled</div>
          </div>
        )}
      </div>
      
      
    </section>
  )
}

export default Sidebar