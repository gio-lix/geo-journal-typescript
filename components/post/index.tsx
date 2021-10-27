import React, {FC} from 'react';
import {BsThreeDots} from 'react-icons/bs'
import {FiMessageCircle} from 'react-icons/fi'
import {BiRepost} from 'react-icons/bi'
import {BsSticky} from 'react-icons/bs'
import {IoMdShare} from 'react-icons/io'
import {AiOutlineDown} from 'react-icons/ai'
import mailbox from '/public/mailbox.jpg'
import post from '/public/post.jpg'
import Image from 'next/image'

interface IPost {

}

const Post: FC = () => {
    return (
        <div className='w-full max-w-3xl my-5 bg-white rounded-xl p-3'>
            <div className='w-full  h-20 bg-white rounded-t-xl'>
                <div className='flex items-center justify-between px-3'>
                    <p className='text-lg font-bold '>G</p>
                    <BsThreeDots className='w-6 h-6'/>
                </div>
            </div>
            <div>
                <p className='text-base font-poppins my-4 font-semibold'>Lorem ipsum dolor sit.</p>
                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto atque, beatae consequatur
                    doloremque dolores minima minus omnis quaerat ratione!</p>
            </div>
            <div className='border bg-white '>
                <div className='relative h-auto  w-full'>
                    <Image src={mailbox} width={50} height={50} layout='responsive' alt='logo' className='absolute'/>
                </div>
            </div>
            <div className='flex items-center justify-between w-full h-[56px] bg-white rounded-b-xl px-6'>
                <div className='flex items-center space-x-5'>
                    <div className='cursor-pointer'>
                        <FiMessageCircle className='w-6 h-6 text-gray-500 hover:text-black'/>
                    </div>
                    <div className='cursor-pointer'>
                        <BiRepost className='w-8 h-8 text-gray-500 hover:text-black'/>
                    </div>
                    <div className='cursor-pointer'>
                        <BsSticky className='w-[20px] h-[20px] text-gray-500 hover:text-black'/>
                    </div>
                    <div className='cursor-pointer'>
                        <IoMdShare className='w-[22px] h-[22px] text-gray-500 hover:text-black'/>
                    </div>
                </div>
                <div className='flex items-center space-x-3'>
                    <div className='cursor-pointer'>
                        <AiOutlineDown className='w-[22px] h-[22px] text-gray-500 hover:text-black'/>
                    </div>
                    <div className='cursor-pointer'>
                        <p className='w-[22px] h-[22px] text-gray-500 hover:text-black '>28</p>
                    </div>
                    <div className='cursor-pointer'>
                        <AiOutlineDown className='w-[22px] h-[22px] text-gray-500 transform rotate-180 hover:text-black'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;