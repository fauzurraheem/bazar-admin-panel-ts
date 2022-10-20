import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase.config';
import AuthLoader from '../components/loader/AuthLoader';
import Login from './login';


function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  console.log(user)

  if(loading){
    return <AuthLoader />
  }

  if(!user){
    return <Login />
  }

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
   )
}

export default MyApp
