import React, {FC,  useEffect, useRef, useState} from 'react';
import ApplyLink from "@/components/header/navigation/ApplyLink";
import messageImage from 'public/message.svg'
import ringImage from 'public/ring.svg'
import userImage from 'public/user.svg'
import userLogin from 'public/userLogin.png'
import { motion } from "framer-motion"
import {fadeInUp} from "../../animation";
import {BiPencil} from "react-icons/bi";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'
import {useRouter} from "next/router";
import WriteForm from "@/components/pages/writeFrom";
import {useWidth} from "@/customHook/useWidth";
import LoginForm from "@/components/account/loginForm/LoginForm";



interface HeaderProps {
    handleClick: () => void,
    setSideBarShow: Function,
    setCommentBar: Function,
    ref: any

}


const Header: FC<HeaderProps> =  React.forwardRef<HTMLButtonElement, HeaderProps>(({ handleClick,setCommentBar, setSideBarShow},ref) => {

    const router = useRouter()
    const {width} = useWidth()

    const ringRef = useRef<HTMLDivElement>(null)
    const messageRef = useRef<HTMLDivElement>(null)
    const userRef = useRef<HTMLDivElement>(null)
    const bodyHoverRef = useRef<HTMLDivElement>(null)

    const [ring, setRing] = useState(false)
    const [message, setMessage] = useState(false)
    const [user, setUser] = useState(false)
    const [post, setPost] = useState(false)
    const [login, setLogin] = useState(false);


    const handleLogin = () => {
        setLogin(!login)
        setSideBarShow(false)
        setCommentBar(false)
    }


    const handleUser = () => {
        setUser(!user)
        setMessage(false)
        setRing(false)
    }
    const handleClickRing = () => {
        setRing(!ring)
        setMessage(false)
        setUser(false)
    }
    const handleClickMessage = () => {
        setMessage(!message)
        setRing(false)
        setUser(false)
    }


    const handlePost = () =>  setPost(!post)

    useEffect(() => {
        window.addEventListener('click', clearHead)
        return () => window.removeEventListener('click', clearHead)
    }, [ring])
    const clearHead = (e: any) => {
        if (!e.path.includes(ringRef.current)) setRing(false)
    }

    useEffect(() => {
        window.addEventListener('click', clearMessage)
        return () => window.removeEventListener('click', clearMessage)
    }, [message])
    const clearMessage = (e: any) => {
        if (!e.path.includes(messageRef.current)) setMessage(false)
    }

    useEffect(() => {
        window.addEventListener('click', clearUser)
        return () => window.removeEventListener('click', clearUser)
    }, [message])
    const clearUser = (e: any) => {
        if (!e.path.includes(userRef.current)) setUser(false)
    }

    useEffect(() => {
        window.addEventListener('click', bodyClear)
        return () => window.removeEventListener('click', bodyClear)
    }, [post])
    const bodyClear = (e: any) => {
        if (e.path.includes(bodyHoverRef.current)) setPost(false)
    }




    return (
        <div className='fixed z-20 w-full h-[64px] flex justify-between bg-red-100 px-5 '>
            {/*left side*/}
            <div className='flex items-center space-x-3 font-bold'>
                <button ref={ref}  onClick={handleClick} className='h-full flex items-center justify-center w-10 h-10 '>
                    <GiHamburgerMenu  className='w-7 h-7 hover:text-gray-400'  />
                </button>
                <p className='text-3xl'>G</p>
                {/*input*/}
                <div className='hidden sm:inline-flex flex items-center rounded sm:w-52 md:w-72 h-full '>
                    <div className='w-9 h-10 flex items-center justify-center absolute    rounded-bl-xl rounded-tl-xl '>
                        <AiOutlineSearch  className='w-7 h-7 text-gray-400'/>
                    </div>
                    <input type="text" className='w-full h-10 pl-10 border rounded  outline-none bg-gray-200' />
                </div>
                {/*new post*/}
                <button onClick={handlePost} className="w-10 lg:w-28 h-10 border rounded drop-shadow hover:shadow-md bg-white flex items-center justify-center rounded">
                    {width < 1024 ? <BiPencil className='w-7 h-7' /> : (
                        <p className='font-semibold'>New Post</p>
                    )}
                </button>
                {post && (
                   <>
                       {/*   hover layout    */}

                       <div ref={bodyHoverRef} className='fixed z-30 w-full h-screen top-0 -left-3 -right-2 bg-black opacity-80 '>  </div>
                       <div className='  fixed z-40 w-full flex justify-center'>
                           <WriteForm onClick={handlePost} />
                       </div>
                   </>
                )}
            </div>

            {/*right side navigation*/}
            <nav className='flex items-center h-full   '>
                <ul className='flex items-center justify-between h-full w-full  '>
                    {/* message logo */}
                    <li >
                        <div ref={messageRef} >
                            <ApplyLink onClick={handleClickMessage} img={messageImage} height={30} width={30} href='/'/>
                            {message && (
                                <motion.div initial="initial" variants={fadeInUp} animate='animate'
                                    className=' absolute top-[64px] w-full sm:w-72 h-48 right-0  sm:right-44 bg-white shadow-2xl'>
                                </motion.div>
                            )}
                        </div>
                    </li>

                    {/* ring logo */}
                    <li>
                        <div ref={ringRef}>
                            <ApplyLink onClick={handleClickRing} img={ringImage} height={30} width={30} href='/'/>
                            {ring && (
                                <motion.div
                                    initial="initial" variants={fadeInUp} animate='animate'
                                    className=' absolute top-[65px] w-full sm:w-96 h-52 right-0 sm:right-28 bg-white shadow-2xl'>

                                </motion.div>
                            )}
                        </div>
                    </li>

                    {/* user logo*/}
                    <li>
                        <div ref={userRef}>
                            <ApplyLink onClick={handleUser} img={userImage} height={30} width={30} href='/'/>
                            {user && (
                                <motion.div
                                    initial="initial" variants={fadeInUp} animate='animate'
                                    className=' absolute top-[65px] w-full sm:w-96 h-52 right-0 sm:right-14 bg-white shadow-2xl'>
                                </motion.div>
                            )}
                        </div>
                    </li>

                    <ApplyLink onClick={() => console.log('item')} img={userLogin} height={50} width={60} href='/'/>
                    <li onClick={handleLogin} className='cursor-pointer'>login</li>
                    {login && <LoginForm setLogin={setLogin} />}
                </ul>
            </nav>
        </div>
    );
});

export default Header ;