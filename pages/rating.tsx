import React, {useEffect, useRef, useState} from 'react';
import Layout from "@/components/Layout";
import {BsThreeDots} from "react-icons/bs";

const Rating = () => {
    const [state, setState] = useState(0);
    const [active, setActive] = useState(0);
    const [closeCart, setCloseCart] = useState(false);

    const popRef = useRef<HTMLDivElement>(null)

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

    const handleOpenToClose = () => {
        setCloseCart(!closeCart)
    }

    useEffect(() => {
        window.addEventListener('click', infoClear)
        return () => window.removeEventListener('click', infoClear)
    }, [closeCart])
    const infoClear = (e: any) => {
        if (!e.path.includes(popRef.current)) setCloseCart(false)
    }



    return (
        <Layout title='rating'>
            <div className='w-full max-w-3xl my-3 mt-10 group'>
                <div className=' relative w-full pb-5  h-auto bg-white  rounded-t-xl'>
                    <div   className=' flex items-center justify-between px-3'>
                        <p className='text-lg font-bold '>rating</p>
                        <div ref={popRef} >
                            <div onClick={handleOpenToClose} className='cursor-pointer'>
                                <BsThreeDots className='w-6 h-6 text-gray-400 group-hover:text-black'/>
                            </div>
                            {closeCart && (
                                <div className=' absolute  bg-white top-5 right-10 w-36 sm:w-44 h-auto rounded  border shadow-xl'>
                                    <p className=' p-1.5 sm:p-2 cursor-pointer font-poppins text-xs sm:text-sm border-b hover:bg-gray-100 text-gray-500 hover:text-black'>Complaint</p>
                                    <p className=' p-1.5 sm:p-2 cursor-pointer font-poppins text-xs sm:text-sm hover:bg-gray-100 text-gray-500 hover:text-black'>Close</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='px-3 mt-2 '>
                        <p className='text-gray-600 text-xs sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum eveniet modi neque odit
                            optio recusandae repudiandae rerum sapiente velit?</p>
                    </div>
                </div>
                <div className='flex  justify-between border bg-white px-2 sm:px-8 '>
                    <div onClick={() => setState(0)}
                         className={` ${active === 0 && 'border-b-2 border-yellow-600'} cursor-pointer`}>
                        <p className='text-sm sm:text-base font-poppins  p-2'>By week</p>
                    </div>
                    <div onClick={() => setState(1)}
                         className={` ${active === 1 && 'border-b-2 border-yellow-600'} cursor-pointer`}>
                        <p className='text-sm sm:text-base font-poppins text-gray-600 p-2 '>By month</p>
                    </div>
                    <div onClick={() => setState(2)}
                         className={` ${active === 2 && 'border-b-2 border-yellow-600'} cursor-pointer`}>
                        <p className='text-sm sm:text-base font-poppins text-gray-600 p-2 '>All time</p>
                    </div>
                </div>
                <div className='w-full mt-4 h-auto bg-white rounded-b-xl'>
                    <div className='flex justify-between px-3 p-3 border-b border-gray-300'>
                        <p className='text-sm sm:text-base '>User Name</p>
                        <p className='text-sm sm:text-base '>Rating</p>
                    </div>
                    <div className='flex justify-between px-3 p-3 '>
                        <p className='text-sm sm:text-base ' >1 <span>mollie andersson</span></p>
                        <p className='text-sm sm:text-base ' >560</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Rating;