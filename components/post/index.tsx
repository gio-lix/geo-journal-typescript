import React, {FC, useEffect, useRef, useState} from 'react';
import {BsThreeDots} from 'react-icons/bs'
import {FiMessageCircle} from 'react-icons/fi'
import {BiRepost} from 'react-icons/bi'
import {BsSticky} from 'react-icons/bs'
import {IoMdShare} from 'react-icons/io'
import {AiOutlineDown} from 'react-icons/ai'

import Image from 'next/image'
import {useRouter} from "next/router";

interface IPost {
    id: number,
    title: string,
    image: any,
    text: string,
}


const Post: FC<IPost> = ({image, text, title,id}) => {
    const dotsRef = useRef<HTMLDivElement>(null)
    const [cartOpen, setCartOpen] = useState(false);

    const router = useRouter()
    const handlerCartOpen = () => {
        setCartOpen(!cartOpen)
    }

    useEffect(() => {
        window.addEventListener('click', infoClear)
        return () => window.removeEventListener('click', infoClear)
    }, [cartOpen])
    const infoClear = (e: any) => {
        if (!e.path.includes(dotsRef.current)) setCartOpen(false)
    }


    const handlePush = (id: any) => {
        router.push(`/news/${id}`)
    }


    return (
        <div className='w-full max-w-3xl my-5 bg-white rounded-xl p-3 group'>
            <div className=' relative w-full  h-20 bg-white rounded-t-xl'>
                <div ref={dotsRef} className='flex items-center justify-between px-3'>
                    <p className='text-lg font-bold '>G</p>
                    <div onClick={handlerCartOpen} className='cursor-pointer '>
                        <BsThreeDots className='w-6 h-6 text-gray-400 group-hover:text-black'/>
                    </div>
                    {cartOpen && (
                        <div className=' absolute top-7 bg-white right-10 w-36 sm:w-44 h-auto rounded  border shadow-xl'>
                            <p className=' p-1.5 sm:p-2 cursor-pointer font-poppins text-xs sm:text-sm border-b hover:bg-gray-100 text-gray-500 hover:text-black'>Complaint</p>
                            <p className=' p-1.5 sm:p-2 cursor-pointer font-poppins text-xs sm:text-sm hover:bg-gray-100 text-gray-500 hover:text-black'>Close</p>
                        </div>
                    )}
                </div>
            </div>
            {/*body*/}
            <div >
                <p onClick={() => handlePush(id)} className='cursor-pointer text-base font-poppins my-4 font-semibold'>{title}</p>
                <p className='my-4'>{text}</p>
            </div>
            <div  onClick={() => handlePush(id)} className=' border bg-white '>
                <div className='relative h-auto cursor-pointer w-auto'>
                    <Image src={image} width={50} height={50} layout='responsive' alt='logo' className='absolute'/>
                </div>
            </div>
            {/*bottom*/}
            <div className='flex items-center justify-between w-full h-[56px] bg-white rounded-b-xl px-3 sm:px-6'>
                <div className='flex items-center space-x-3 sm:space-x-5'>
                    <div className='cursor-pointer '>
                        <FiMessageCircle className='w-6 h-6 text-gray-500 hover:text-black'/>
                    </div>
                    <div className='cursor-pointer'>
                        <BiRepost className='w-7 sm:w-8 h-7 sm:h-8 text-gray-500 hover:text-black'/>
                    </div>
                    <div className='cursor-pointer'>
                        <BsSticky className='w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-gray-500 hover:text-black'/>
                    </div>
                    <div className='cursor-pointer'>
                        <IoMdShare className='w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] text-gray-500 hover:text-black'/>
                    </div>
                </div>
                <div className='flex items-center space-x-2 sm:space-x-3'>
                    <div className='cursor-pointer'>
                        <AiOutlineDown className='w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] text-gray-500 hover:text-black'/>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='w-[20px]] sm:w-[22px] h-[20px] sm:h-[22px] text-gray-500 hover:text-black '>28</p>
                    </div>
                    <div className='cursor-pointer'>
                        <AiOutlineDown className='w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] text-gray-500 transform rotate-180 hover:text-black'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;