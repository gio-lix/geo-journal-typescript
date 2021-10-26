import {FC} from "react"
import Image from "next/image";

// @ts-ignore
import data from '/data'
import { motion } from "framer-motion";
// @ts-ignore
import {leftInUp, routeAnimation, stagger} from "/animation";




const SideComments: FC = () => {
    const commentsData = data.comments.popular

  return (
     <motion.div variants={routeAnimation} initial="initial"
                 animate="animate"
                 exit="exit"  >
         <motion.div  variants={stagger}  initial="initial" animate='animate'>
             {commentsData.map((obj: any) => (
                 <motion.div  variants={leftInUp} key={obj.key} className='my-4'>
                     <div  className='flex flex-col'>
                         <div className='flex space-x-2'>
                             <Image src={obj.user.avatarUrl} width={25} height={25} className='rounded' alt='image' />
                             <p className='text-xs font-semibold font-poppins'>{obj.user.fullName}</p>
                         </div>
                         <div>
                             <p className='text-xs text-gray-600'>{obj.text}</p>
                         </div>
                     </div>
                 </motion.div>
             ))}
         </motion.div>
     </motion.div>
  )
}
export default SideComments