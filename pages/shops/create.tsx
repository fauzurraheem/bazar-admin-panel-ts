import React from 'react'
import { useRouter } from 'next/router'
import  { useState } from 'react'
import {BsCloudUploadFill} from 'react-icons/bs'
import {FiEye} from 'react-icons/fi'
import {FiEyeOff} from 'react-icons/fi'
import { Info, Password } from '../profile'


const Create = () => {
  const {pathname} = useRouter()
  const [image, setImage] = useState('')
  const [show, setShow] = useState(false)
  const [infoForm, setInfoForm] = useState({name:'', contact:'',bio:'',AccountHolderName:'',AccountHolderEmail:'',BankName:'',AccountNumber:'',country:'',city:'',state:'',})
  const {name, contact} = infoForm
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
   }


  const InfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoForm({
      ...infoForm,
      [e.target.name]:e.target.value
    })
  }

  

  const InfoSubmit = (e: React.FormEvent<HTMLFormElement>
    ) => {
    e.preventDefault()
    window.alert('submitted')



    // setInfoForm({
    //   name:'',
    //   contact:'',
    //   bio:''
    // })
  }









  return (
    <div className='pt-16 lg:pl-96 w-full h-full text-gray-500  text-base'>
      <div className='p-4 sm:p-8'>
        <h1 className='text-2xl text-gray-600 my-6'>Create Shop</h1>
        <hr className=' border-dashed border-gray-300'/>
        <div className='flex sm:flex-row  flex-col w-full my-8  '>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Logo</h3>
            <p>
            Upload your shop logo from here
            </p>
          </div>
          <div className=' bg-white w-full rounded-md p-4'>
            <input className=' hidden' type="file" onChange={onImageChange} placeholder='' id='files'   />
            <label htmlFor="files" className='border-2 active:text-emerald-500 border-dashed border-gray-200 rounded-md h-32 flex-col flex items-center justify-center p-2 mb-2'>
              <a className='text-gray-600 hover:text-emerald-500 outline-none'>
                <div className='flex flex-col items-center'>
                  <BsCloudUploadFill size={40} />
                  <div className='font-semibold text-gray-400'><span className='text-emerald-500'>Upload an Image</span> or drag and drop PNG, JPG</div>
                </div>
              </a>
            </label>
              {image && 
                <img src={image} alt=""  className='w-20 h-20 rounded-md object-fill' />
             }
          </div>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className='flex sm:flex-row flex-col w-full my-8  '>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Cover Image</h3>
            <p>
              Upload your shop cover image from here Dimension of the cover image should be  1170 x 435px
            </p>
          </div>
          <div className=' bg-white w-full rounded-md p-4'>
            <input className=' hidden' type="file" onChange={onImageChange} placeholder='' id='files'   />
            <label htmlFor="files" className='border-2 active:text-emerald-500 border-dashed border-gray-200 rounded-md h-44 flex-col flex items-center justify-center p-2 mb-2 '>
              <a className='text-gray-600 hover:text-emerald-500 outline-none'>
                <div className='flex flex-col items-center'>
                  <BsCloudUploadFill size={40} />
                  <div className='font-semibold text-gray-400'><span className='text-emerald-500'>Upload an Image</span> or drag and drop PNG, JPG</div>
                </div>
              </a>
            </label>
              {image && 
                <img src={image} alt=""  className='w-20 h-20 rounded-md object-fill' />
             }
          </div>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className=' my-8 flex sm:flex-row  flex-col  w-full'>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Basic Info</h3>
            <p>
            Add some basic info about your shop from here
            </p>
          </div>
          <div className='w-full space-y-2'>
            <div className=' bg-white rounded-md p-8'>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>Name</label>
                <input type="text" name="name" className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={name} onChange={InfoChange}/>
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label  className='font-medium text-base'>Description</label>
                <textarea rows={4} name="bio"  className='border border-gray-300 rounded outline-none py-2 px-2 focus:border-emerald-500'  onChange={(e) => {setInfoForm({
                  ...infoForm,
                  bio:e.target.value 
                })}} />
              </div>
            </div>
          </div>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className=' my-8 flex sm:flex-row  flex-col  w-full'>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Payment Info</h3>
            <p>
            Add your payment information from here
            </p>
          </div>
          <div className='w-full space-y-2'>
            <div className=' bg-white rounded-md p-8'>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>Account Holder Name</label>
                <input type="text" name="name" className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={name} onChange={InfoChange}/>
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="contact" className='font-medium text-base'>Account Holder Email</label>
                <input type="text" name="contact"  className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={contact} onChange={InfoChange} />
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>Bank Name</label>
                <input type="text" name="name"  className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={name} onChange={InfoChange}/>
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="contact" className='font-medium text-base'>Account Number</label>
                <input type="text" name="contact"  className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={contact} onChange={InfoChange} />
              </div>
            </div>
          </div>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className=' my-8 flex sm:flex-row  flex-col  w-full'>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Shop Address</h3>
            <p>
            Add your physical shop address from here
            </p>
          </div>
          <div className='w-full space-y-2' >
            <div className=' bg-white rounded-md p-8'>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>Country</label>
                <input type="text" name="name"  className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={name} onChange={InfoChange}/>
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="contact" className='font-medium text-base'>City</label>
                <input type="text" name="contact"  className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={contact} onChange={InfoChange} />
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>State</label>
                <input type="text" name="name" className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={name} onChange={InfoChange}/>
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="contact" className='font-medium text-base'>ZIP</label>
                <input type="text" name="contact" className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={contact} onChange={InfoChange} />
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label  className='font-medium text-base'>Street Address</label>
                <textarea rows={4} name="bio" className='border border-gray-300 rounded outline-none py-2 px-2 focus:border-emerald-500'  onChange={(e) => {setInfoForm({
                  ...infoForm,
                  bio:e.target.value 
                })}} />
              </div>
            </div>
          </div>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className=' my-8 flex sm:flex-row  flex-col  w-full'>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Shop Settings</h3>
            <p>
            Add your shop settings information from here
            </p>
          </div>
          <div className='w-full space-y-2'>
            <div className=' bg-white rounded-md p-8'>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>Set location from map</label>
                <input type="text" name="name" placeholder='Search location from here' className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={name} onChange={InfoChange}/>
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="contact" className='font-medium text-base'>Contact Number</label>
                <input type="text" name="contact" className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={contact} onChange={InfoChange} />
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>Website</label>
                <input type="text" name="name"  className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={name} onChange={InfoChange}/>
              </div>
              <div className=' mb-2'>
                <button className='py-3  w-[12rem] rounded-md bg-emerald-600 text-gray-50 text-base font-medium '>Add new social profile</button>
              </div>
            </div>
          </div>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className='flex justify-end w-full my-8'>
            <button className='py-2 w-32 rounded-md bg-emerald-600 text-gray-50 text-sm font-medium '>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Create