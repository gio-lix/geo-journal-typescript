import {FC} from "react"
import {AiOutlineSetting} from "react-icons/ai";

interface IHeaderProfile {

}
const HeaderProfile: FC<IHeaderProfile> = () => {
  return (
     <>
         <div className='flex flex-col'>
             <div className='flex flex-col md:flex-row justify-between'>
                 <div
                     className='w-12 md:w-20 h-12 md:h-20 bg-green-500 rounded  flex items-center justify-center'>
                     <p className='text-3xl font-bold text-white'>G</p>
                 </div>
                 <div className='flex items-center space-x-3 my-4 md:my-0'>
                     <div
                         className='w-7 md:w-9 h-7 md:h-9 border shadow-2xl flex items-center justify-center rounded '>
                         <AiOutlineSetting className='w-6 md:w-7 h-6 md:h-7  '/>
                     </div>
                     <div>
                         <p className='bg-green-600 px-3 md:px-5 py-1 md:py-1.5 text-white font-semibold rounded'>New
                             Post</p>
                     </div>
                 </div>

             </div>
             {/*name*/}
             <div>
                 <div className='my-2 md:my-4'>
                     <p className='text-base sm:text-xl  md:text-3xl font-poppins font-bold '>Mollie
                         Kiaundersso</p>
                 </div>
                 <div className='my-2'>
                     <p className='text-sm text-green-700 cursor-pointer hover:underline'>change name or
                         description</p>
                 </div>
                 <div className='my-2'>
                     <p className='text-sm  '>start from 2121 21 21</p>
                 </div>
             </div>
         </div>
     </>
  )
}
export default HeaderProfile