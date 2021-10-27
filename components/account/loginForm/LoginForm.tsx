import {FC} from "react"
import Login from "@/components/account/loginForm/Login";
import {RiCloseFill} from 'react-icons/ri'

interface ILoginForm {
    setLogin: Function
}
const LoginForm: FC<ILoginForm> = ({setLogin}) => {
  return (
     <>
         <div onClick={() => setLogin(false)}  className='fixed w-full h-full z-75  top-0 left-0 bg-black opacity-80 '> </div>
         <div className='fixed z-75 absolute flex justify-center  w-full h-full z-100  left-0 sm:top-0 md:top-16 '>
             <div className=' relative md:w-[600px] md:h-[500px] w-full h-screen bg-white'>
                 <button onClick={() => setLogin(false)} className='absolute  right-3 top-3'>
                    <RiCloseFill  className='w-8 h-8 text-red-700 '/>
                 </button>
                 <Login/>
             </div>
         </div>
     </>
  )
}
export default LoginForm
