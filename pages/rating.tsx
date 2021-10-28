import React, {useEffect, useState} from 'react';
import Layout from "@/components/Layout";
import {BsThreeDots} from "react-icons/bs";

const Rating = () => {
    const [state, setState] = useState(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (state === 0) {
            setActive(0)
            return
        } else if (state === 1) {
            setActive(1)
            return
        } else if (state === 2) {
            setActive(2)
            return
        }
    }, [state]);



    return (
        <Layout title='rating'>
            <div className='w-full max-w-3xl my-3'>
                <div className='w-full pb-5  h-auto bg-white rounded-t-xl'>
                    <div className='flex items-center justify-between px-3'>
                        <p className='text-lg font-bold '>rating</p>
                        <BsThreeDots className='w-6 h-6'/>
                    </div>
                    <div className='px-3 mt-2 '>
                        <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum eveniet modi neque odit
                            optio recusandae repudiandae rerum sapiente velit?</p>
                    </div>
                </div>
                <div className='flex justify-between border bg-white px-8 '>
                    <div onClick={() => setState(0)}
                         className={` ${active === 0 && 'border-b-2 border-yellow-600'} cursor-pointer`}>
                        <p className='text-base font-poppins  p-2'>By week</p>
                    </div>
                    <div onClick={() => setState(1)}
                         className={` ${active === 1 && 'border-b-2 border-yellow-600'} cursor-pointer`}>
                        <p className='text-base font-poppins text-gray-600 p-2 '>By month</p>
                    </div>
                    <div onClick={() => setState(2)}
                         className={` ${active === 2 && 'border-b-2 border-yellow-600'} cursor-pointer`}>
                        <p className='text-base font-poppins text-gray-600 p-2 '>All time</p>
                    </div>
                </div>
                <div className='w-full mt-4 h-auto bg-white rounded-b-xl'>
                    <div className='flex justify-between px-3 p-3 border-b border-gray-300'>
                        <p>User Name</p>
                        <p>Rating</p>
                    </div>
                    <div className='flex justify-between px-3 p-3 '>
                        <p>1 <span>mollie andersson</span></p>
                        <p>560</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Rating;