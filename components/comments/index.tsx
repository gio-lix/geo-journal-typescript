import {FC} from "react"
import Image from "next/image";
import {BsThreeDots} from 'react-icons/bs'

interface IComments {
    text: string,
    createdAt: string,
    user: {
        fullName: string,
        avatarUrl: string
    }

}
const Comments: FC<IComments> = ({user,text,createdAt}) => {
  return (
     <>
        <div className='my-5 '>

            <div className='flex items-center space-x-5'>
                <Image src={user.avatarUrl} width={40} height={40} alt='avatar' className='rounded-full'/>
                <p className='font-bold'>{user.fullName}</p>
                <p className='text-xs text-gray-500'>{createdAt}</p>
            </div>
            <div>
                <p className='text-gray-600'>{text}</p>
            </div>
            <div className='mt-3'>
                <div className='flex items-center space-x-5'>
                    <p className='text-gray-500 text-xs font-poppins'>Reply</p>
                    <BsThreeDots className='text-gray-500'/>
                </div>

            </div>
        </div>
     </>
  )
}
export default Comments