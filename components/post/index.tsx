import React, {FC} from 'react';
import {BsThreeDots} from 'react-icons/bs'


interface IPost {

}

const Post: FC = () => {
    return (
        <div className='w-full max-w-3xl'>
            <div className='w-full  h-20 bg-white rounded-t-xl'>
                <div className='flex items-center justify-between px-3'>
                    <p className='text-lg font-bold '>G</p>
                    <BsThreeDots className='w-6 h-6' />
                </div>
            </div>
            <div className='border bg-white '>
                    dsfdsfds  dfdsfds
            </div>
            <div className='w-full h-[56px] bg-white rounded-b-xl'>

            </div>
        </div>
    );
};

export default Post;