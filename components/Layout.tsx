import React, {FC, useEffect, useRef, useState} from "react";
import Head from 'next/head'
import Header from "@/components/header/Header";
import CommentBar from "@/components/commentBar/CommentBar";
import SideBar from "@/components/sideMenu/SideBar";
import {useWidth} from "@/customHook/useWidth";
import {AiOutlineFire, AiOutlineMessage} from "react-icons/ai";
import {SiCodersrank} from "react-icons/si";
import {MdOutlineUnsubscribe} from "react-icons/md";
import {useRouter} from "next/router";


interface LayoutProps {
    title: string
    keywords?: string,
    description?: string,
    hideMenu?: boolean

}
const navbar = [
    {text: 'Popular', icon: <AiOutlineFire/>, path: '/'},
    {text: 'messages', icon: <AiOutlineMessage />, path: '/messages'},
    {text: 'checkList', icon: <SiCodersrank/>, path: '/rating'},
    {text: 'under', icon: <MdOutlineUnsubscribe/>, path: '/follows'}
]

const Layout: FC<LayoutProps> = ({
                                     title,
                                     hideMenu,
                                     description,
                                     keywords,
                                     children
                                 }) => {
    const {width} = useWidth()
    const router = useRouter()
    const sidebarRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [sidebarShow, setSideBarShow] = useState(true)
    const [commentBar, setCommentBar] = useState(false)

    const handleClick = () => {
        if (width < 1000 && commentBar) setCommentBar(false)
        setSideBarShow(!sidebarShow)
    }
    const handleCommentBar = () => {
        if (width < 1000 && sidebarShow) setSideBarShow(false)
        setCommentBar(!commentBar)
    }
    //
    useEffect(() => {
        if (width < 1000) {
            setSideBarShow(true)
            setCommentBar(false)
        }
    }, [width])

    useEffect(() => {
        window.addEventListener('click', handleCheckMessagePath)
        return () => window.removeEventListener('click', handleCheckMessagePath)
    }, [sidebarShow])
    const handleCheckMessagePath = (e: any) => {
        if (!e.path.includes(sidebarRef.current) && !e.path.includes(buttonRef.current)) setSideBarShow(false)
    }





    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name=''/>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>
            <div>
                <Header handleClick={handleClick} ref={buttonRef}/>
            </div>


            {sidebarShow && (
                <div ref={sidebarRef} className='fixed w-60 bg-indigo-100 h-screen top-16 left-0 z-50 md:hidden '>
                    <SideBar sidebarShow={sidebarShow} />
                </div>
            )}

            <div className='flex pr-4 md:pr-0 bg-indigo-100'>
                {/*menu side bar*/}
                <div ref={sidebarRef}
                     className={`${sidebarShow ? 'w-64 drop-shadow-11xl md:drop-shadow-none' : 'w-4 sm:8 md:w-40'} fixed md:sticky z-30 top-16   h-[540px] overflow-y-auto scrollbar-hide `}>
                    <SideBar sidebarShow={sidebarShow} />
                </div>
                {/*main content */}
                <div  className=' flex-1 ml-4  md:ml-0 mt-16 h-[1000px]'>
                    {children}
                </div>
                {/*comment bar*/}
                <div className={`hidden md:inline-flex  ${commentBar ? 'w-52 md:w-[280px]' : 'w-12 md:w-20'} `}>
                    <div
                        className={`  ${commentBar ? 'w-52 md:w-[280px]' : 'w-12 md:w-20'} h-screen sticky top-14 right-0  `}>
                        <div className={`w-full h-full  flex justify-center ${!commentBar && 'items-center'}`}>
                            <CommentBar handleCommentBar={handleCommentBar} commentBar={commentBar}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout
Layout.defaultProps = {
    title: 'geo Journal',
    keywords: 'Journal',
    description: 'News Every Day'
}