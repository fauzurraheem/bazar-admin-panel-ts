import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'

const Shop = () => {
  const [status, setStatus] = useState('Inactive')







  return (
    <div className='pt-16 lg:pl-96 w-full h-screen overflow-y-auto bg-gray-100'>
      <div className='p-8 w-full'>
        <div className='flex justify-between flex-col md:flex-row items-center  bg-white rounded-md h-40 p-6 shadow '>
          <h1 className='font-medium text-2xl'>Shop</h1>
          <div className='flex bg-white py-4 px-2 rounded-md border border-gray-200 min-w-[20rem] md:w-[400px] w-full'>
            <AiOutlineSearch size={25} />
            <input type="text" className='outline-none w-full ml-4' placeholder='Type Your Query And Press Enter' />
          </div>
        </div>


        <div className='mt-12 bg-white rounded-md shadow overflow-x-auto w-full'>
            <table className=' w-full'>
              <thead className=''>
                <tr className='bg-gray-50 text-gray-600 border-b border-gray-300'>
                  <th className='min-w-[2rem] text-left p-4'>logo</th>
                  <th className='p-4 pl-0 text-left min-w-[10rem]'>Name</th>
                  <th className='p-4 min-w-[8rem]'>Owner Name</th>
                  <th className='p-4'>Products</th>
                  <th className='p-4'>Orders</th>
                  <th className='p-4 min-w-[10rem] text-left '>Status</th>
                  <th></th>
                  <th className='p-4'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-300'>
                  <td className='text-center'>ee</td>
                  <td className=''>John Doe</td>
                  <td className='text-center'>Shop Owner</td>
                  <td className='text-center'>55</td>
                  <td className='text-center'>8</td>
                  <td className='flex items-center'>
                    <span className='m-0 mr-12 p-3 font-medium'>{status}</span>
                    {status === 'Inactive' ? <AiOutlineCheckCircle className='text-emerald-500' onClick={(e) => setStatus('Active')} size={20}/> : <MdOutlineCancel className='text-red-500' onClick={(e) => setStatus('Inactive')} size={20} />}
                  </td>
                  <td></td>
                  <td className='flex justify-center items-center '> <span><AiOutlineEye size={25} /></span> </td>
                </tr>
              </tbody>
            </table>
        </div> 
      </div>
    </div>
  )
}

export default Shop