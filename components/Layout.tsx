import React, {FC, useEffect, useRef, useState} from "react";
import Head from 'next/head'
import Header from "@/components/header/Header";
import CommentBar from "@/components/commentBar/CommentBar";
import {useWidth} from "../costumHook/useWidth";
import SideBar from "@/components/sideMenu/SideBar";


interface LayoutProps {
    title: string
    keywords?: string,
    description?: string,
    hideMenu?: boolean

}


const Layout: FC<LayoutProps> = ({
                                     title,
                                     hideMenu,
                                     description,
                                     keywords,
                                     children
                                 }) => {
    const {width} = useWidth()
    const sidebarRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [sidebarShow, setSideBarShow] = useState<boolean>(false)
    const [commentBar, setCommentBar] = useState<boolean>(false)

    const handleClick = () => {
        if (width < 1000 && commentBar) setCommentBar(false)
        setSideBarShow(!sidebarShow)
    }
    const handleCommentBar = () => {
        if (width < 1000 && sidebarShow) setSideBarShow(false)
        setCommentBar(!commentBar)
    }

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

            {!hideMenu && (
                <div ref={sidebarRef}
                     className={`fixed z-10 left-0  h-screen overflow-y-auto top-16 bg-indigo-100 ${sidebarShow ? 'w-52 md:w-[270px] ' : ' sm:w-0 md:w-20'} `}>
                    <SideBar sidebarShow={sidebarShow}/>
                </div>
            )}
            {/*side bar */}
            <div className='flex  transform translate-y-[65px]'>
                {!hideMenu &&  <div  className={`${sidebarShow ? 'w-52 md:w-[270px]' : 'sm:w-0 md:w-20'} fixed sm:sticky Z-10 left-0 h-auto `}> </div>}
                {/* children  */}
                <div className='flex flex-grow  border bg-gray-200 ' style={{height: "200vh"}}>
                    {children}
                </div>

                {/* comment bar */}
                {!hideMenu && (
                    <div className={`hidden md:inline-flex ${commentBar ? 'w-52 md:w-[280px]' : 'w-12 md:w-20'} `}>
                        <div
                            className={`  ${commentBar ? 'w-52 md:w-[280px]' : 'w-12 md:w-20'} h-screen sticky top-0 right-0 bg-indigo-100 `}>
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