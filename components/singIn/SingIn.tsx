import { signInWithEmailAndPassword } from 'firebase/auth'
import { type } from 'os'
import React, { useState } from 'react'
import {FiEye} from 'react-icons/fi'
import {FiEyeOff} from 'react-icons/fi'
import { toast } from 'react-toastify'
import { auth } from '../../firebase.config'
import {FiLoader} from 'react-icons/fi'

type Register = {
  setRegister: React.Dispatch<React.SetStateAction<boolean>>
}
type formdata = {
  password: string;
  email:string
}

const SingIn:React.FC<Register> = ({setRegister}) => {
  const [show, setShow] = useState(false)
  const [nameErr, setNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [passwordErr, setpasswordErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [formdata, setFormdata] = useState<formdata>({ email:'odefunsofauzurraheem@gmail.com', password:'123454567u9'})
  const { email, password} = formdata;

  const setParams = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })

    if(email.length >= 0){
      setEmailErr('')
    }
    if(password.length >= 5){
      setpasswordErr('')
    }

  }

  const handleSubmit = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)
  
    if(email === ''){
      setLoading(false)
      setEmailErr('Email is required/input the correct email format')

    }else if(password === '' || password.length < 6){
      setLoading(false)
      setpasswordErr('Strong password is required')
    }else{
      try {
        signInWithEmailAndPassword(auth, email, password);
  
        // updateProfile(auth.currentUser,{
        //   displayName:name
        //  });
  
        
        setLoading(false)
        toast.success('Registration sucessful')
        // setFormdata({ email:'',password:'' })
  
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error('ffff')
      }
    }

  }




  return (
    <div className='md:m-auto h-screen flex items-center justify-center text-gray-700 text-base bg-white md:bg-gray-100'>
      <div className='bg-white p-8 w-[420px] rounded-md md:shadow-md'>
        <h1 className='text-2xl text-center text-emerald-500'>FALZ-STORE</h1>
        <p className='text-center italic'>Login to admin</p>
        <form  >
          <div className='flex flex-col space-y-1 mb-2'>
          <label htmlFor="email" className='font-medium text-base'>Email.</label>
            <input type="email" name="email" placeholder='Email' className='border border-gray-300 rounded outline-none py-2 px-4 focus:border-emerald-500' value={email} onChange={setParams}/>
            <span className='text-red-500 text-sm'>{emailErr}</span>
          </div>
          <div className='flex flex-col '>
          <label htmlFor="password" className='font-medium text-base'>Password.</label>
            <div className=' relative'>
              <input type={`${show ? 'text' : 'password'}`} name="password"  placeholder='Password' className='border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-2 px-4 focus:border-emerald-500' value={password} onChange={setParams}/>
              {show ? (<span className='absolute right-1 top-[25%] '><FiEyeOff size={20} onClick={(e) => setShow(prevState => !prevState)} /></span>):( <span className='absolute right-1 top-[25%]'><FiEye size={20} onClick={(e) => setShow(prevState => !prevState)}/></span>)
              }
               <span className='text-red-500 text-sm'>{passwordErr}</span>
            </div>
          </div>
          <button className={`w-full rounded-md py-2 ${loading ? "bg-white" : 'bg-emerald-500'} font-semibold text-white text-xl  cursor-pointer mt-4 `} onClick={handleSubmit}>Login {loading && <FiLoader size={20} />}</button>
        </form>
        <div className='flex items-center justify-between mt-4'>
          <hr className='w-[50%]'/>
          <span className='m-0 mx-2'>Or</span>
          <hr  className='w-[50%]'/>
        </div>
        <div className='my-2'>
          <p className='text-base text-center'>Don't have any account? <span className='text-emerald-500 underline cursor-pointer' onClick={() => setRegister(true)}>Register as a Shop Owner</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default SingIn