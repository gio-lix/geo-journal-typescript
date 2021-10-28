import {FC} from "react"
import {HiOutlinePhotograph} from "react-icons/hi";
import {GrAttachment} from "react-icons/gr";

interface IMiddleBody {

}
const MiddleBody: FC<IMiddleBody> = () => {
  return (
     <>
         <div className='w-full md:w-10/12 bg-white h-auto  rounded-2xl p-2 sm:p-4 my-4'>
             <div className='flex space-x-3 '>
                 <div className='w-7 h-7 rounded-full bg-green-400 flex justify-center items-center'>
                     <p className='font-bold text-white font-poppins '>G</p>
                 </div>
                 <p>post</p>
             </div>
             <div className='flex space-x-3'>
                 <div
                     className=' p-1.5 px-2 bg-red-100 flex  space-x-3 items-center rounded-2xl my-3 cursor-pointer'>
                     <HiOutlinePhotograph className='w-5 h-5 text-green-400'/>
                     <p className='whitespace-nowrap text-xs text-gray-600'>Photos && Video</p>
                 </div>
                 <div
                     className=' p-1.5 px-2 bg-red-100 flex items-center space-x-3 rounded-2xl my-3 cursor-pointer'>
                     <GrAttachment className='w-5 h-4 text-green-400'/>
                     <p className='whitespace-nowrap text-xs text-gray-600'>Attached</p>
                 </div>
             </div>
         </div>
     </>
  )
}
export default MiddleBody