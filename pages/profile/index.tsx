import {FC, useEffect, useRef, useState} from "react"
import Layout from "@/components/Layout";
import WriteForm from "@/components/pages/writeFrom";
import {useRouter} from "next/router";
import MiddleBody from "@/components/pages/profilePage/MiddleBody";
import WritePost from "@/components/pages/profilePage/WritePost";
import HeaderProfile from "@/components/pages/profilePage/HeaderProfile";



const Profile: FC = () => {
    const [state, setState] = useState(0);
    const [active, setActive] = useState(0);
    const [post, setPost] = useState(false)
    const handlePost = () => setPost(!post)
    const bodyHoverRef = useRef<HTMLDivElement>(null)

    const router = useRouter()

    useEffect(() => {
        if (state === 0) setActive(0)
        if (state === 1) setActive(1)
        if (state === 2) setActive(2)
        if (state === 3) setActive(3)
        if (state === 4) setActive(4)
    }, [state])


    return (
        <Layout title='profile' hideSideComments hideSideMenu>
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
            <div className='w-full flex flex-col items-center justify-center   '>
                <div className='w-full md:w-10/12 bg-white h-auto  p-2 sm:p-4 rounded-b-xl '>
                    {/*header*/}
                    <HeaderProfile />

                    {/*    header navigation */}
                    <div className='flex space-x-8 mt-6  overflow-x-auto  scrollbar-hide'>
                        <div onClick={() => setState(0)}
                             className={`cursor-pointer ${active === 0 && 'border-b-2 border-green-600'}`}>
                            <p className='text-sm sm:text-base md:text-xl  text-gray-500 hover:text-green-600 font-semibold'>post</p>
                        </div>
                        <div onClick={() => setState(1)}
                             className={`cursor-pointer ${active === 1 && 'border-b-2 border-green-600'}`}>
                            <p className='text-sm sm:text-base md:text-xl  text-gray-500 hover:text-green-600 font-semibold'>comments</p>
                        </div>
                        <div onClick={() => setState(2)}
                             className={`cursor-pointer ${active === 2 && 'border-b-2 border-green-600'}`}>
                            <p className='text-sm sm:text-base md:text-xl  text-gray-500 hover:text-green-600 font-semibold'>box</p>
                        </div>
                        <div onClick={() => setState(3)}
                             className={`cursor-pointer ${active === 3 && 'border-b-2 border-green-600'}`}>
                            <p className='text-sm sm:text-base md:text-xl  text-gray-500 hover:text-green-600 font-semibold'>donation</p>
                        </div>
                        <div onClick={() => setState(4)}
                             className={`cursor-pointer ${active === 4 && 'border-b-2 border-green-600'}`}>
                            <p className='text-sm sm:text-base md:text-xl  text-gray-500 hover:text-green-600 font-semibold whitespace-nowrap'>see
                                more</p>
                        </div>
                    </div>
                </div>
                {/*middle body*/}
                <MiddleBody/>
                {/* write post*/}
                <WritePost handlePost={handlePost} />

            </div>
        </Layout>
    )
}
export default Profile