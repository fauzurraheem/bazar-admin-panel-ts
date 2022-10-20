import React,{useState} from 'react'
import SignUp from '../components/singIn/SignUp'
import SingIn from '../components/singIn/SingIn'

const Login = () => {
  const [register, setRegister] = useState(false)

  return (
    <div className=''>
      {!register ? <SingIn setRegister={setRegister} /> : <SignUp setRegister={setRegister}/>}
    </div>
  )
}

export default Login