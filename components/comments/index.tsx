import {FC, useEffect, useRef, useState} from "react"
import Image from "next/image";
import {BsThreeDots} from 'react-icons/bs'
import {MdFileCopy} from 'react-icons/md'
import {FaRegStickyNote} from 'react-icons/fa'
import {FiFlag} from 'react-icons/fi'
import {AiFillEyeInvisible, AiFillPicture} from 'react-icons/ai'
import {GrAttachment} from 'react-icons/gr'
import moment from 'moment';

interface IComments {
    text: string,
    createdAt: string,
    user: {
        fullName: string,
        avatarUrl: string
    }

}

const Comments: FC<IComments> = ({user, text, createdAt}) => {

    const replayRef = useRef<HTMLDivElement>(null);
    const [dots, setDots] = useState(false);
    const [reply, setReplay] = useState(false);

    const handleDots = () => {
        setDots(!dots)
        setReplay(false)
    }
    const handleReply = () => {
        setReplay(!reply)
        setDots(false)
    }

    useEffect(() => {
        window.addEventListener('click', replyClear)
        return () => window.removeEventListener('click', replyClear)
    }, [dots])
    const replyClear = (e: any) => {
        if (!e.path.includes(replayRef.current)) {
            setDots(false)
            setReplay(false)
        }
    }



    return (
        <>
            <div ref={replayRef} className='my-5  '>

                <div className='flex items-center space-x-5'>
                    <Image src={user.avatarUrl} width={40} height={40} alt='avatar' className='rounded-full'/>
                    <p className='font-bold'>{user.fullName}</p>
                    <p className='text-xs text-gray-500'>{createdAt}</p>
                </div>
                <div>
                    <p className='text-gray-600'>{text}</p>
                </div>
                <div  className='mt-3'>
                    <div className='flex items-center space-x-5'>
                        <p onClick={handleReply}
                           className='text-gray-500 text-xs font-poppins cursor-pointer hover:text-green-400'>Reply</p>
                        <span onClick={handleDots} className='cursor-pointer'>
                        <BsThreeDots className='text-gray-400 hover:text-black'/>
                    </span>
                    </div>
                    {reply && (
                        <div className=' w-full h-36 border border-gray-600   grid grid-rows-12  my-3'>
                            <div className='bg-red-100 row-span-4'>
                                <textarea name="reply" className='px-1 w-full h-full scrollbar-hide outline-none resize-none'/>
                            </div>
                            <div className=' row-span-8 flex justify-between items-center px-5'>
                                <div className='flex items-center space-x-5'>
                                    <span className='cursor-pointer'>
                                         <AiFillPicture className='text-green-400 w-5 h-5'/>
                                    </span>
                                   <span className='cursor-pointer'>
                                       <GrAttachment className='text-blue-300 w-4 h-4'/>
                                   </span>
                                </div>
                                <div className='flex space-x-5'>
                                    <button onClick={() => setReplay(false)} className='font-poppins underline text-gray-500 hover:text-black'>close</button>
                                    <button className='font-poppins w-24 p-1 text-white font-semibold bg-blue-300 rounded'>send</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {dots && (
                        <div className='w-44 h-auto bg-white shadow-2xl absolute z-40 px-2 py-1 border rounded'>
                            <div className='flex items-center space-x-4 py-1 hover:bg-gray-100 px-2 cursor-pointer'>
                                <MdFileCopy className='text-gray-600'/>
                                <p className='text-sm font-poppins'>Copy link</p>
                            </div>
                            <div className='flex items-center space-x-4 py-1 hover:bg-gray-100 px-2 cursor-pointer'>
                                <FaRegStickyNote className='text-gray-600'/>
                                <p className='text-sm font-poppins'>Add link</p>
                            </div>
                            <div className='flex items-center space-x-4 py-1 hover:bg-gray-100 px-2 cursor-pointer'>
                                <FiFlag className='text-gray-600'/>
                                <p className='text-sm font-poppins'>complaints</p>
                            </div>
                            <div className='flex items-center space-x-4 py-1 hover:bg-gray-100 px-2 cursor-pointer'>
                                <AiFillEyeInvisible className='text-gray-600'/>
                                <p className='text-sm font-poppins'>Ignore</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
export default Comments