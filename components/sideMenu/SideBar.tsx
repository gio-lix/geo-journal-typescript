import React, {FC} from 'react';
import {AiOutlineFire} from 'react-icons/ai'
import {HiOutlinePencil} from 'react-icons/hi'
import Image from "next/image";
import Link from 'next/link'
import {FiClock} from 'react-icons/fi'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineUnsubscribe} from 'react-icons/md'
import {SiCodersrank} from 'react-icons/si'

interface SidebarProps {
    sidebarShow: boolean
}

const navbar = [
    {text: 'Popular', icon: <AiOutlineFire/>, path: '/'},
    {text: 'messages', icon: <AiOutlineMessage />, path: '/messages'},
    {text: 'checkList', icon: <SiCodersrank/>, path: '/rating'},
    {text: 'under', icon: <MdOutlineUnsubscribe/>, path: '/follows'}
]

const SideBar: FC<SidebarProps> = ({sidebarShow}) => {
    return (
        <div className=' w-full'>
            {sidebarShow && (
                <ul className='w-full h-full mt-4 pr-5 pl-2 '>
                    {navbar.map(item => (
                        <li key={item.path}>
                            <Link href={item.path} >
                                <div className='h-[44px] cursor-pointer hover:bg-white rounded-lg flex items-center px-2 space-x-3 my-3'>
                                    <div className='text-2xl'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className='text-base font-poppins text-gray-600 tracking-wide'>{item.text}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>

                    ))}

                    {/*<div*/}
                    {/*    className='h-[44px] hover:bg-white cursor-pointer rounded-lg flex items-center px-2 space-x-3 my-3'>*/}
                    {/*    <div>*/}
                    {/*        <FiClock className='w-6 h-6 text-gray-600'/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <p className='text-base font-poppins text-gray-600 tracking-wide'>All</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    className='h-[44px] hover:bg-white cursor-pointer rounded-lg flex items-center px-2 space-x-3 my-3'>*/}
                    {/*    <div>*/}
                    {/*        <AiOutlineMessage className='w-6 h-6 text-gray-600'/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <p className='text-base font-poppins text-gray-600 tracking-wide'>Messages</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    className='h-[44px] hover:bg-white cursor-pointer rounded-lg flex items-center px-2 space-x-3 my-3'>*/}
                    {/*    <div>*/}
                    {/*        <SiCodersrank className='w-6 h-6 text-gray-600'/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <p className='text-base font-poppins text-gray-600 tracking-wide'>Rating</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    className='h-[44px] hover:bg-white cursor-pointer rounded-lg flex items-center px-2 space-x-3 my-3'>*/}
                    {/*    <div>*/}
                    {/*        <MdOutlineUnsubscribe className='w-6 h-6 text-gray-600'/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <p className='text-base font-poppins text-gray-600 tracking-wide'>Subscribe</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*/!*author*!/*/}
                    {/*<div*/}
                    {/*    className='h-[44px] hover:bg-white cursor-pointer rounded-lg flex items-center px-2 space-x-3 my-3'>*/}
                    {/*    <div>*/}
                    {/*        <HiOutlinePencil className='w-6 h-6 text-yellow-600'/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <p className='text-base font-poppins text-yellow-600 tracking-wide'>Subscribe</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </ul>
            )}
        </div>
    );
};

export default SideBar;