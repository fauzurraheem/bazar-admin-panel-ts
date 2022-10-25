import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {BsCloudUploadFill} from 'react-icons/bs'
import {FiEye} from 'react-icons/fi'
import {FiEyeOff} from 'react-icons/fi'
import { auth } from '../firebase.config'

export interface Info {
  name: string;
  contact:string;
  bio:string;

}
export interface Password {
  old: string;
  newP:string;
  confirmP:string;

}


const Profile = () => {
  const {pathname} = useRouter()
  const [image, setImage] = useState('')
  const [show, setShow] = useState(false)
  const [infoForm, setInfoForm] = useState<Info>({name:'', contact:'',bio:''})
  const [passwordForm, setPasswordForm] = useState<Password>({old:'', newP:'',confirmP:''})
  const {name, contact, bio} = infoForm
  const { old, newP, confirmP} = passwordForm
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

  const PasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]:e.target.value
    })
  }

  const InfoSubmit = (e: React.FormEvent<HTMLFormElement>
    ) => {
    e.preventDefault()
    window.alert('submitted')



    setInfoForm({
      name:'',
      contact:'',
      bio:''
    })
  }
  const PasswordSubmit = (e: React.FormEvent<HTMLFormElement>
    ) => {
    e.preventDefault()
    window.alert('submitted')



    setPasswordForm({
      old:'',
      newP:'',
      confirmP:''
    })
  }

  // const handleFiles = (files:{name:string}[])=> {
  //   // const  uploaded = [...uploadedFiles]
  //   // let limitExceeded = false;
  //   // files.some(file => {
  //   //   uploaded.push(file)
  //   // })
  //   console.log(files)

  // }

  // const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const chosenFiles=Array.prototype.slice.call(e.target.files)
  //   // handleFiles(chosenFiles)
  //   let choose: string[]
  //   chosenFiles.forEach(file => {
  //      if (e.target.files && e.target.files[0]) {
  //     const url = URL.createObjectURL(file);
  //     console.log(url)

  //     // choose.push(url)
  //     // console.log(choose)

  //   }
  //   })
   
  //   setUploadedFiles(chosenFiles)
  // }
  console.log(infoForm)
   



  return (
    <div className='pt-16 lg:pl-96 w-full h-full text-gray-500  text-base'>
      <div className='p-4 sm:p-8'>
        <h1 className='text-2xl text-gray-600 my-6'>Profile Settings</h1>
        <hr className=' border-dashed border-gray-300'/>
        <div className='flex sm:flex-row sm:items-center flex-col w-full my-8  '>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Avatar</h3>
            <p>
            Upload your profile image from here. Dimension of the avatar should be 140 x 140px
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
        <div className=' my-8 flex sm:flex-row  flex-col  w-full'>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Information</h3>
            <p>
            Add your profile information from here
            </p>
          </div>
          <form className='w-full space-y-2' onSubmit={InfoSubmit}>
            <div className=' bg-white rounded-md p-8'>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="name" className='font-medium text-base'>Name.</label>
                <input type="text" name="name" placeholder='Name' className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={name} onChange={InfoChange}/>
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label  className='font-medium text-base'>Bio.</label>
                <textarea rows={4} name="bio" placeholder='Name' className='border border-gray-300 rounded outline-none py-2 px-2 focus:border-emerald-500' value={bio} onChange={(e) => {setInfoForm({
                  ...infoForm,
                  bio:e.target.value 
                })}} />
              </div>
              <div className='flex flex-col space-y-1 mb-2'>
                <label htmlFor="contact" className='font-medium text-base'>Contact Number.</label>
                <input type="text" name="contact" placeholder='Contact Numder' className='border border-gray-300 rounded outline-none py-4 px-4 focus:border-emerald-500'  value={contact} onChange={InfoChange} />
              </div>
            </div>
            <button className='py-2 w-20 rounded-md bg-emerald-600 text-gray-50 text-base font-medium ml-[-6px]'>Save</button>
          </form>
        </div>
        <hr className=' border-dashed border-gray-300'/>
        <div className='flex sm:flex-row  flex-col w-full my-8'>
          <div className='sm:w-[45%] py-6 pr-6'>
            <h3 className='text-base font-medium'>Password</h3>
            <p>
            Change your password from here
            </p>
          </div>
          <form className='w-full space-y-2' onSubmit={PasswordSubmit}>
            <div className='bg-white  rounded-md p-8 space-y-4'>
              <div className='flex flex-col'>
                <label htmlFor="old" className='font-medium text-base'>Old Password.</label>
                <div className='relative'>
                  <input type={`${show ? 'text' : 'password'}`} name="old" className='border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-3 px-4 focus:border-emerald-500' value={old} onChange={PasswordChange}/>
                  {show ? (<span className='absolute right-1 top-[25%] '><FiEyeOff size={20} onClick={(e) => setShow(prevState => !prevState)} /></span>):( <span className='absolute right-1 top-[25%]'><FiEye size={20} onClick={(e) => setShow(prevState => !prevState)}/></span>)
                  }
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="newP" className='font-medium text-base'>New Password.</label>
                <div className='relative'>
                  <input type={`${show ? 'text' : 'password'}`} name="newP" className='border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-3 px-4 focus:border-emerald-500' value={newP} onChange={PasswordChange} />
                  {show ? (<span className='absolute right-1 top-[25%] '><FiEyeOff size={20} onClick={(e) => setShow(prevState => !prevState)} /></span>):( <span className='absolute right-1 top-[25%]'><FiEye size={20} onClick={(e) => setShow(prevState => !prevState)}/></span>)
                  }
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="confirmP" className='font-medium text-base'>Confirm Password.</label>
                <div className='relative'>
                  <input type={`${show ? 'text' : 'password'}`} name="confirmP" className='border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-3 px-4 focus:border-emerald-500' value={confirmP} onChange={PasswordChange} />
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