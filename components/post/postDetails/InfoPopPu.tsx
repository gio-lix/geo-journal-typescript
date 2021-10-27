import React, {FC} from "react"
import {fadeInUp} from "../../../animation";
import {CgEuro} from "react-icons/cg";
import {RiStickyNote2Line} from "react-icons/ri";
import {AiOutlineSetting} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";
import {motion} from "framer-motion";

interface Info {

}
const InfoPopUp: FC<Info> = () => {
  return (
     <>
         <motion.div initial="initial" variants={fadeInUp} animate='animate'
                     className=' absolute top-[64px] w-full sm:w-52 h-auto top-18  right-0  sm:right-5 bg-white shadow-2xl rounded'>
             <div className=''>
                 <p className='font-poppins text-xs  px-3 text-gray-600 mt-2'>Profile</p>
                 <div className='flex items-center space-x-3 border-b border-gray-400 py-2  px-3'>
                     <div className='w-6 h-6 bg-green-200 flex items-center justify-center'>
                         <p className='  inline-flex font-bold text-white'>G</p>
                     </div>
                     <p className='font-semibold text-sm'>mollie kaidersson</p>
                 </div>
                 <div className='flex  items-center space-x-3 py-[7px] border-b border-gray-100 hover:bg-gray-200 cursor-pointer px-3'>
                     <div>
                         <CgEuro  className='text-gray-600 w-5 h-5'/>
                     </div>
                     <p className='text-sm text-gray-600 font-poppins'>donat</p>
                 </div>
                 <div className='flex items-center  space-x-3 py-[7px] border-b border-gray-100 hover:bg-gray-200 cursor-pointer px-3'>
                     <div>
                         <RiStickyNote2Line  className='text-gray-600 w-5 h-5'/>
                     </div>
                     <p className='text-sm text-gray-600 font-poppins'>sticky</p>
                 </div>
                 <div className='flex  items-center  space-x-3 py-[7px] border-b border-gray-100 hover:bg-gray-200 cursor-pointer px-3'>
                     <div>
                         <AiOutlineSetting  className='text-gray-600 w-5 h-5'/>
                     </div>
                     <p className='text-sm text-gray-600 font-poppins'>Settings</p>
                 </div>
                 <div className='flex  items-center space-x-3 py-[7px] border-b border-gray-100 hover:bg-gray-200 cursor-pointer px-3'>
                     <div>
                         <BiLogOut  className='text-gray-600 w-5 h-5'/>
                     </div>
                     <p className='text-sm text-gray-600 font-poppins'>Log out</p>
                 </div>
             </div>
         </motion.div>
     </>
  )
}
export default InfoPopUp