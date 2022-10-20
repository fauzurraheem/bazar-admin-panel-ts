import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {BsCloudUploadFill} from 'react-icons/bs'
import {FiEye} from 'react-icons/fi'
import {FiEyeOff} from 'react-icons/fi'

const Profile = () => {
  const {pathname} = useRouter()
  const [image, setImage] = useState('')
  const [show, setShow] = useState(false)
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
   }
   



  return (
    <div className='pt-16 lg:pl-96 w-full h-full text-gray-500 bg-gray-100 text-sm'>
      <div className='p-8'>
        <h1 className='text-2xl text-gray-600 my-6'>Profile Settings</h1>
        <hr className=' border-dashed border-gray-300'/>
        <div className='flex items-center w-full my-8'>
          <div className='w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Avatar</h3>
            <p>
            Upload your profile image from here. Dimension of the avatar should be 140 x 140px
            </p>
          </div>
          <div className='h-[200px]  bg-white w-full rounded-md p-4'>
            <input className='border-2 border-dashed border-gray-200 rounded-md h-32 flex-col flex items-center justify-center'type="file" multiple onChange={onImageChange} placeholder='' name='files[]'   />
              <BsCloudUploadFill size={40} />
              <div className='font-semibold text-gray-400'><span className='text-emerald-500'>Upload an Image</span> or drag and drop PNG, JPG</div>
              <img src={image} className='w-12 h-12' alt="preview image" />
          </div>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className=' my-8 flex  w-full'>
          <div className='w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Information</h3>
            <p>
            Add your profile information from here
            </p>
          </div>
          <form className='w-full space-y-2'>
            <div className=' bg-white rounded-md p-8'>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>Name.</label>
                <input type="text" name="name" placeholder='Name' className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  />
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label  className='font-medium text-base'>Bio.</label>
                <textarea rows={4} name="name" placeholder='Name' className='border border-gray-300 rounded outline-none py-2 px-2 focus:border-emerald-500'  />
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="number" className='font-medium text-base'>Contact Number.</label>
                <input type="text" name="number" placeholder='Contact Numder' className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  />
              </div>
            </div>
            <button className='py-2 w-20 rounded-md bg-emerald-600 text-gray-50 text-base font-medium ml-[-6px]'>Save</button>
          </form>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className='flex w-full my-8'>
          <div className='w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Password</h3>
            <p>
            Change your password from here
            </p>
          </div>
          <form className='w-full space-y-2'>
            <div className='bg-white  rounded-md p-8 space-y-4'>
              <div className='flex flex-col'>
                <label htmlFor="old" className='font-medium text-base'>Old Password.</label>
                <div className='relative'>
                  <input type={`${show ? 'text' : 'password'}`} name="old" className='border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-3 px-4 focus:border-emerald-500'/>
                  {show ? (<span className='absolute right-1 top-[25%] '><FiEyeOff size={20} onClick={(e) => setShow(prevState => !prevState)} /></span>):( <span className='absolute right-1 top-[25%]'><FiEye size={20} onClick={(e) => setShow(prevState => !prevState)}/></span>)
                  }
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="new" className='font-medium text-base'>New Password.</label>
                <div className='relative'>
                  <input type={`${show ? 'text' : 'password'}`} name="new" className='border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-3 px-4 focus:border-emerald-500'/>
                  {show ? (<span className='absolute right-1 top-[25%] '><FiEyeOff size={20} onClick={(e) => setShow(prevState => !prevState)} /></span>):( <span className='absolute right-1 top-[25%]'><FiEye size={20} onClick={(e) => setShow(prevState => !prevState)}/></span>)
                  }
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="confirm" className='font-medium text-base'>Confirm Password.</label>
                <div className='relative'>
                  <input type={`${show ? 'text' : 'password'}`} name="confirm" className='border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-3 px-4 focus:border-emerald-500'/>
                  {show ? (<span className='absolute right-1 top-[25%] '><FiEyeOff size={20} onClick={(e) => setShow(prevState => !prevState)} /></span>):( <span className='absolute right-1 top-[25%]'><FiEye size={20} onClick={(e) => setShow(prevState => !prevState)}/></span>)
                  }
                </div>
              </div>
            </div>
            <button className='py-2 w-32 rounded-md bg-emerald-600 text-gray-50 text-sm font-medium ml-[-6px]'>Change Password</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile