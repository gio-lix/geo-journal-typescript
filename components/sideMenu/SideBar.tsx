import React, {FC} from 'react';
import {AiOutlineFire} from 'react-icons/ai'
import Link from 'next/link'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineUnsubscribe} from 'react-icons/md'
import {SiCodersrank} from 'react-icons/si'
import {useRouter} from "next/router";

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
    const router = useRouter()

    return (
        <>
            <div className={`fixed z-30 h-full  overflow-y-auto  md:top-16 w-52 sm:w-60 ${sidebarShow ? 'left-0 ' : '-left-60 '}`}>
                {navbar.map((item, i) => (
                    <div className='ml-4' key={i}>
                        <Link href={item.path}>
                            <a>
                                <button   className={`${router.asPath === item.path && 'bg-gray-50'} ' flex items-center rounded w-full h-9 mt-3  cursor-pointer '`}>
                                    <div className='flex space-x-3 items-center h-full '>
                                        <p className='text-xl text-gray-600   '>{item.icon}</p>
                                        <p className='ml-2 opacity-80  '>{item.text}</p>
                                    </div>
                                </button>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
};

export default SideBar;