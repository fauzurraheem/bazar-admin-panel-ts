import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import React,{useState} from 'react'
import {FiEye} from 'react-icons/fi'
import {FiEyeOff} from 'react-icons/fi'
import { toast } from 'react-toastify'
import {auth} from '../../firebase.config'
import {FiLoader} from 'react-icons/fi'


type Register = {
  setRegister: React.Dispatch<React.SetStateAction<boolean>>
}
type formdata = {
  name: string;
  password: string;
  email:string
}

const SignUp:React.FC<Register> = ({setRegister}) => {
  // const auth = getAuth() 
  const [show, setShow] = useState(false)
  const [nameErr, setNameErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [passwordErr, setpasswordErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [formdata, setFormdata] = useState<formdata>({name:'', email:'', password:''})
  const {name, email, password} = formdata;

  const setParams = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })

    if(name.length >= 0){
      setNameErr('')
    }
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
    if(name === ''){
      setLoading(false)
      setNameErr('Name is Required')
    } else if(email === ''){
      setLoading(false)
      setEmailErr('Email is required/input the correct email format')

    }else if(password === '' || password.length < 6){
      setLoading(false)
      setpasswordErr('Strong password is required')
    }else{
      try {
        createUserWithEmailAndPassword(auth, email, password);
  
        // updateProfile(auth.currentUser,{
        //   displayName:name
        //  });
  
        
        setLoading(false)
        // toast.success('Registration sucessful')
        setLoading(false)
      } catch (error) {
        setLoading(false)
        // toast.error()
      }
    }

  }


  return (
    <div className='md:m-auto h-screen flex items-center justify-center text-gray-500 text-base bg-white md:bg-gray-100'>
      <div className='bg-white p-8 w-[420px] rounded-md md:shadow-md'>
        <h1 className='text-2xl text-center text-emerald-500'>FALZ-STORE</h1>
        <p className='text-center italic'>Register new Account </p>
        <form className=''>
          <div className='flex flex-col space-y-1 mb-2'>
            <label htmlFor="name" className='font-medium text-base'>Name.</label>
            <input type="text" name="name" placeholder='Name' className='border border-gray-300 rounded outline-none py-2 px-4 focus:border-emerald-500' value={name} onChange={setParams} />
            <span className='text-red-500 text-sm'>{nameErr}</span>
          </div>
          <div className='flex flex-col space-y-1 mb-2'>
            <label htmlFor="email" className='font-medium text-base'>Email.</label>
            <input type="email" name="email" placeholder='Email' className='border border-gray-300 rounded outline-none py-2 px-4 focus:border-emerald-500' value={email} onChange={setParams}/>
            <span className='text-red-500 text-sm'>{emailErr}</span>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="password" className='font-medium text-base'>Password.</label>
            <div className='relative'>
              <input type={`${show ? 'text' : 'password'}`} name="password"  placeholder='Password' className='border border-gray-300 rounded outline-none focus:bg-white active:bg-white w-full py-2 px-4 focus:border-emerald-500' value={password} onChange={setParams}/>
              {show ? (<span className='absolute right-1 top-[25%] '><FiEyeOff size={20} onClick={(e) => setShow(prevState => !prevState)} /></span>):( <span className='absolute right-1 top-[25%]'><FiEye size={20} onClick={(e) => setShow(prevState => !prevState)}/></span>)
              }
               <span className='text-red-500 text-sm'>{passwordErr}</span>
            </div>
          </div>
          <button className={`w-full rounded-md py-2 ${loading ? "bg-white" : 'bg-emerald-500'} font-semibold text-white text-xl  cursor-pointer mt-4 `} onClick={handleSubmit}>Register {loading && <FiLoader size={20} />}</button>
        </form>
        <div className='flex items-center justify-between mt-4'>
          <hr className='w-[50%]'/>
          <span className='m-0 mx-2'>Or</span>
          <hr  className='w-[50%]'/>
        </div>
        <div className='my-2'>
          <p className='text-base text-center'>Already have an account? <span className='text-emerald-500 underline cursor-pointer' onClick={() => setRegister(false)}>Login</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default SignUp