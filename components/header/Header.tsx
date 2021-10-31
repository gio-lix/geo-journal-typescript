import React, {FC, useEffect, useRef, useState} from 'react';
import ApplyLink from "@/components/header/navigation/ApplyLink";
import messageImage from 'public/message.svg'
import ringImage from 'public/ring.svg'
import userLogin from 'public/userLogin.png'
import {motion} from "framer-motion"
import {fadeInUp} from "../../animation";
import {BiPencil} from "react-icons/bi";
import {RiLoginCircleFill} from "react-icons/ri";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineDown, AiOutlineSearch, AiOutlineSetting} from 'react-icons/ai'
import {ImSad2} from 'react-icons/im'

import {useRouter} from "next/router";
import WriteForm from "@/components/pages/writeFrom";
import {useWidth} from "@/customHook/useWidth";
import LoginForm from "@/components/account/loginForm/LoginForm";
import InfoPopUp from "@/components/post/postDetails/InfoPopPu";

interface IUserLogin {
    email: string,
    password: string
}

interface HeaderProps {
    handleClick: () => void,
    setSideBarShow: Function,
    setCommentBar: Function,
    ref: any

}


const Header: FC<HeaderProps> = React.forwardRef<HTMLButtonElement, HeaderProps>(({
                                                                                      handleClick,
                                                                                      setCommentBar,
                                                                                      setSideBarShow
                                                                                  }, ref) => {

    const router = useRouter()
    const {width} = useWidth()


    const ringRef = useRef<HTMLDivElement>(null)
    const messageRef = useRef<HTMLDivElement>(null)
    const userRef = useRef<HTMLDivElement>(null)
    const bodyHoverRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef<HTMLDivElement>(null)
    const infoRef = useRef<HTMLDivElement>(null)

    let user = {email: 'mollie@gmail.com', password: 'wadwa123'}

    const [userLoginCheck, setUserLoginCheck] = useState<IUserLogin | null>({email: 'mollie@gmail.com', password: 'wadwa123'});

    const [ring, setRing] = useState(false)
    const [message, setMessage] = useState(false)
    const [post, setPost] = useState(false)
    const [login, setLogin] = useState(false);
    const [search, setSearch] = useState(false);
    const [info, setInfo] = useState(false);


    const handleLogin = () => setLogin(!login)
    const handleInfo = () => setInfo(!info)
    const handleSearch = () => setSearch(!search)
    const handleClickRing = () => setRing(!ring)
    const handleClickMessage = () => setMessage(!message)
    const handlePost = () => setPost(!post)


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
        window.addEventListener('click', bodyClear)
        return () => window.removeEventListener('click', bodyClear)
    }, [post])
    const bodyClear = (e: any) => {
        if (e.path.includes(bodyHoverRef.current)) setPost(false)
    }

    useEffect(() => {
        window.addEventListener('click', searchClear)
        return () => window.removeEventListener('click', searchClear)
    }, [search])
    const searchClear = (e: any) => {
        if (!e.path.includes(searchRef.current)) setSearch(false)
    }
    useEffect(() => {
        window.addEventListener('click', infoClear)
        return () => window.removeEventListener('click', infoClear)
    }, [info])
    const infoClear = (e: any) => {
        if (!e.path.includes(infoRef.current)) setInfo(false)
    }


    return (
        <div className='fixed z-20 w-full h-[64px] flex justify-between bg-red-100 px-5 '>
            {/*left side*/}
            <div className=' flex  items-center space-x-3 font-bold'>
                <div onClick={handleClick} className='h-full flex items-center justify-center w-10 h-10 cursor-pointer'>
                    <GiHamburgerMenu className='w-7 h-7 text-gray-400 hover:text-black'/>
                </div>
                <button onClick={() => router.push('/')} className='text-3xl font-bold hover:text-red-600'>G</button>
                {/*input*/}
                <div className='flex items-center space-x-2'>
                    <div className='hidden sm:inline-flex flex items-center rounded sm:w-52 md:w-72 h-full '>
                        <div
                            className='w-9 h-10 flex items-center justify-center absolute    rounded-bl-xl rounded-tl-xl '>
                            <AiOutlineSearch className='w-7 h-7 text-gray-400'/>
                        </div>
                        <input type="text" className='w-full h-10 pl-10 border rounded  outline-none bg-gray-200'/>
                    </div>
                    {/*new post*/}
                    <div onClick={handlePost}
                         className="hidden cursor-pointer group sm:inline-flex w-10 lg:w-28 h-10 border rounded drop-shadow hover:shadow-md bg-white flex items-center justify-center rounded">
                        {width < 1024 ? <BiPencil className='w-7 h-7 text-green-300'/> : (
                            <p className='font-semibold text-gray-500 group-hover:text-green-200'>New Post</p>
                        )}
                    </div>
                </div>
                {post && (
                    <>
                        {/*   hover layout    */}
                        <div ref={bodyHoverRef}
                             className='fixed  z-30 w-full h-screen top-0 -left-3 -right-2 bg-black opacity-80 '></div>

                        <div className='  fixed z-40 w-full flex justify-center'>
                            <WriteForm onClick={handlePost}/>
                        </div>
                    </>
                )}
            </div>

            {/*right side navigation*/}
            <nav className='flex items-center h-full   '>
                <ul className='flex items-center   justify-between h-full w-full  '>
                    {/* message logo */}
                    <li>
                        <div ref={searchRef}>
                            <div onClick={handleSearch}
                                 className='sm:hidden flex items-center mr-2 cursor-pointer'>
                                <AiOutlineSearch className='w-8 h-7 text-gray-400'/>
                            </div>
                            {search && (
                                <motion.div initial="initial" variants={fadeInUp} animate='animate'
                                            className='sm:hidden absolute top-[64px] w-full  h-14 right-0 top-[60px] p-1 py-2  bg-red-100 shadow-2xl'>
                                    <input type="text" id='search' name='search'
                                           className="w-full h-full px-3 outline-none "
                                           placeholder='search'/>
                                </motion.div>
                            )}
                        </div>
                    </li>
                    <li>
                        <div ref={messageRef}>
                            <ApplyLink onClick={handleClickMessage} img={messageImage} height={25} width={25}/>
                            {message && (
                                <motion.div initial="initial" variants={fadeInUp} animate='animate'
                                            className=' absolute top-[64px] w-full sm:w-72 h-48 right-0  sm:right-44 bg-white shadow-2xl'>
                                    <div className='absolute top-0 left-0 right-0 border-b border-gray-300'>
                                        <p className='p-1 text-gray-700'>messages</p>
                                    </div>
                                    <div className=' w-full h-full flex items-center justify-center  px-3'>
                                        <p className='text-sm text-gray-700 text-center'>Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Beatae, veniam.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </li>

                    {/* ring logo */}
                    <li>
                        <div ref={ringRef}>
                            <ApplyLink onClick={handleClickRing} img={ringImage} height={25} width={25}/>
                            {ring && (
                                <motion.div
                                    initial="initial" variants={fadeInUp} animate='animate'
                                    className=' absolute top-[64px] w-full sm:w-96 h-52 right-0 sm:right-28 bg-white shadow-2xl'>
                                    <div className='absolute top-0 left-0 right-0 border-b border-gray-300'>
                                        <p className='p-1 text-gray-700'>notifications</p>
                                    </div>
                                    <div className=' w-full h-full flex flex-col items-center justify-center px-3'>
                                        <ImSad2 className='w-9 h-9 text-yellow-500'/>
                                        <p className='text-sm text-gray-700 text-center'>Lorem ipsum dolor dsf ewefs dsfewdewf sit amet, consectetur
                                            adipisicing elit. Beatae, veniam.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </li>
                    {userLoginCheck ? (
                        <>
                            {/*logo*/}
                            <div className='hidden sm:inline-flex'>
                                <ApplyLink onClick={() => router.push('profile')} img={userLogin} height={40}
                                           width={40}/>
                            </div>
                            <li>
                                <div ref={infoRef}>
                                    <div onClick={handleInfo} className='cursor-pointer  '>
                                        <AiOutlineDown className='w-[22px] h-[22px] text-gray-400 hover:text-black'/>
                                    </div>
                                    {info && (
                                        <InfoPopUp/>
                                    )}
                                </div>
                            </li>
                        </>
                    ) : (
                        <>
                            <li onClick={handleLogin} className='flex space-x-2 items-center cursor-pointer group '>
                                <div>
                                    <RiLoginCircleFill className='w-[22px] h-[22px] text-green-200'/>
                                </div>
                                <p className='text-gray-400 group-hover:text-green-400 font-poppins font-semibold '> login</p>

                            </li>
                            {login && <LoginForm setLogin={setLogin}/>}
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
});

export default Header;