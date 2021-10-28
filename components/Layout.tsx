import React, {FC, useEffect, useRef, useState} from "react";
import Head from 'next/head'
import Header from "@/components/header/Header";
import CommentBar from "@/components/commentBar/CommentBar";
import SideBar from "@/components/sideMenu/SideBar";
import {useWidth} from "@/customHook/useWidth";
import {GiHamburgerMenu} from 'react-icons/gi'
import {useRouter} from "next/router";


interface LayoutProps {
    title: string
    keywords?: string,
    description?: string,
    hideMenu?: boolean
    hideSideComments?: boolean
    hideSideMenu?: boolean

}


const Layout: FC<LayoutProps> = ({
                                     title,
                                     hideSideComments,
                                     hideSideMenu,
                                     hideMenu,
                                     description,
                                     keywords,
                                     children
                                 }) => {
    const {width} = useWidth()
    const router = useRouter()
    const sidebarRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const commentRef = useRef<HTMLDivElement>(null)
    const [sidebarShow, setSideBarShow] = useState(false)
    const [commentBar, setCommentBar] = useState(false)


    const handleClick = () => {
        if (width < 1000 && commentBar) {
            setCommentBar(false)
        }
        setSideBarShow(!sidebarShow)
        setCommentBar(false)
    }
    const handleCommentBar = () => {
        if (width < 1000 && sidebarShow) setSideBarShow(false)
        setCommentBar(!commentBar)
        // setSideBarShow(true)
    }
    //
    useEffect(() => {
        if (width < 1000) {
            setSideBarShow(false)
            setCommentBar(false)
        }
    }, [width])

    useEffect(() => {
        window.addEventListener('click', handleCheckMessagePath)
        return () => window.removeEventListener('click', handleCheckMessagePath)
    }, [sidebarShow])
    const handleCheckMessagePath = (e: any) => {
        if (e.path.includes(sidebarRef.current) && !e.path.includes(buttonRef.current)) setSideBarShow(false)
    }

    useEffect(() => {
        window.addEventListener('click', handleCheckComponentPath)
        return () => window.removeEventListener('click', handleCheckComponentPath)
    }, [commentBar, sidebarShow])
    const handleCheckComponentPath = (e: any) => {
        if (!e.path.includes(commentRef.current) && !e.path.includes(sidebarRef.current)) setCommentBar(false)
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>
            <div>
                <Header handleClick={handleClick}
                        setSideBarShow={setSideBarShow}
                        setCommentBar={setCommentBar}
                        ref={buttonRef}/>
            </div>
            <div ref={sidebarRef}>
                {sidebarShow && (
                    <>
                        <div className={` fixed z-20 top-0 w-full h-screen bg-gray-600 opacity-60 ${!hideSideMenu && 'md:hidden'}`}> </div>
                        <div className={`fixed z-30 w-60 bg-indigo-100 h-screen top-0 left-0 ${!hideSideMenu && 'md:hidden'}`}>
                            <div className='w-full h-[64px] border flex items-center pl-5'>
                                <button onClick={handleClick}
                                        className='h-full flex items-center justify-center w-10 h-10 '>
                                    <GiHamburgerMenu className='w-7 h-7 hover:text-gray-400'/>
                                </button>
                            </div>
                            <SideBar sidebarShow={sidebarShow}/>
                        </div>
                    </>
                )}
            </div>
            <div className='flex pr-4 md:pr-0 bg-indigo-100'>
                {/*menu side bar*/}
                {!hideSideMenu && (
                    <div className={`hidden md:inline-flex   ${sidebarShow ? 'w-52 md:w-[280px]' : 'w-12 md:w-20'} `}>
                        <div
                            className={`  ${sidebarShow ? 'w-52 md:w-[280px]' : 'w-12 md:w-20'} h-screen sticky top-20 left-0  `}>
                            <div className={`w-full h-full   flex justify-center ${!sidebarShow && 'items-center'}`}>
                                <SideBar sidebarShow={sidebarShow}/>
                            </div>
                        </div>
                    </div>
                )}
                <div className=' flex-1 ml-4 flex  justify-center  md:ml-0 mt-16 h-auto'>
                    {children}
                </div>
                {/*comment bar*/}
                {!hideSideComments && (
                    <div ref={commentRef}
                         className={`hidden md:inline-flex  pt-20 ${commentBar ? 'w-52 md:w-[280px]' : 'w-12 md:w-20'} `}>
                        <div
                            className={`  ${commentBar ? 'w-52 md:w-[280px]' : 'w-12 md:w-20'} h-screen sticky top-20 right-0  `}>
                            <div className={`w-full h-full  flex justify-center ${!commentBar && 'items-center'}`}>
                                <CommentBar handleCommentBar={handleCommentBar} commentBar={commentBar}/>
                            </div>
                        </div>
                    </div>
                )}
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