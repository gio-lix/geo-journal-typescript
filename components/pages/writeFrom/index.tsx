import { motion } from 'framer-motion';
import React, {FC, useEffect, useState} from 'react';
import {fadeInUp} from "../../../animation";
import {useRouter} from "next/router";
import {IoIosResize} from 'react-icons/io';
import {GrFormClose} from 'react-icons/gr';

import dynamic from "next/dynamic";

const Editor = dynamic(
    () => import('../../Editor'), { ssr: false }
);

interface IPost {
    onClick?: () => void,
}

const WriteForm: FC<IPost> = ({onClick}) => {
    const router = useRouter()
    const [resizePost , setResizePost] = useState<boolean>(false)


    return (
        <motion.div initial="initial" variants={fadeInUp} animate='animate'
                    className={` ${resizePost ? "h-full w-full top-0 left-0 " : "h-96 top-[65px] sm:w-96 md:w-[600px] lg:w-[800px]"}  
                    bg-white shadow-2xl fixed   p-4`}>
            <div className='flex justify-between items-center'>
                <div>
                    <p>My post</p>
                </div>
                <div className='flex items-center space-x-4'>
                    <button onClick={() => setResizePost(!resizePost)}>
                        <IoIosResize className='w-5 h-5 font-bold text-gray-600'/>
                    </button>
                    <button onClick={onClick}>
                        <GrFormClose className='w-7 h-7 font-bold text-gray-600' />
                    </button>
                </div>
            </div>
            <div className='flex justify-center '>
                <input type="text" placeholder='Title' className='px-2 h-10 w-2/6 border-b-2 border-green-400 outline-none bg-gray-200 mt-4 '/>
            </div>
            <div className='h-4/6  overflow-y-auto'>
                <Editor />
            </div>
            <div className='flex justify-center'>
                <button className='px-7 py-1 bg-green-400 hover:bg-green-800 text-white font-bold'>Published</button>
            </div>
        </motion.div>
    );
};

export default WriteForm;