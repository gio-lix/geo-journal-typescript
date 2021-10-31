import {FC} from "react"
import {HiSearch} from 'react-icons/hi'
import {BsPencilSquare} from 'react-icons/bs'

interface IMessagePage {

}
const MessagePage: FC<IMessagePage> = () => {
  return (
     <>
         <div className='w-full bg-white grid grid-cols-12' style={{height: '90vh'}}>
             <div  className=' col-span-12 md:col-span-4 '>
                 <div className='border-b flex items-center justify-between border-gray-500 h-10 px-4 '>
                     <div className='flex space-x-2 items-center   w-full '>
                         <HiSearch  className='w-5 h-5 '/>
                         <input type="text" className='w-full outline-none py-1  px-1' placeholder='Search'/>
                     </div>
                     <BsPencilSquare className='text-green-400 w-5 h-5' />
                 </div>
                 <div className=' row-span-8 '>

                 </div>
             </div>
             <div className='hidden md:inline-flex flex justify-center items-center border-l border-gray-500 col-span-8 row-span-12 '>
                 <div className='w-full  h-full flex items-center justify-center '>
                     <p>Please first send a message to someone</p>
                 </div>
             </div>
         </div>
     </>
  )
}
export default MessagePage