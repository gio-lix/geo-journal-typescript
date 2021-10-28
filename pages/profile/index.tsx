import {FC, useEffect, useRef, useState} from "react"
import Layout from "@/components/Layout";
import {AiOutlineSetting} from 'react-icons/ai'
import {HiOutlinePhotograph} from 'react-icons/hi'
import {GrAttachment} from 'react-icons/gr'
import WriteForm from "@/components/pages/writeFrom";
import {useRouter} from "next/router";

interface IProfile {

}

const Profile: FC<IProfile> = () => {
    const [state, setState] = useState(0);
    const [active, setActive] = useState(0);
    const [post, setPost] = useState(false)
    const bodyHoverRef = useRef<HTMLDivElement>(null)

    const router = useRouter()

    useEffect(() => {
        if (state === 0) setActive(0)
        if (state === 1) setActive(1)
        if (state === 2) setActive(2)
        if (state === 3) setActive(3)
        if (state === 4) setActive(4)
    }, [state])

    const handlePost = () => setPost(!post)

    return (
        <Layout title='profile' hideSideComments hideSideMenu>
            {post && (
                <>
                    {/*   hover layout    */}
                    <div ref={bodyHoverRef}
                         className='fixed  z-30 w-full h-screen top-0 -left-3 -right-2 bg-black opacity-80 '> </div>

                    <div className='  fixed z-40 w-full flex justify-center'>
                        <WriteForm onClick={handlePost}/>
                    </div>
                </>
            )}
            <div className='w-full flex flex-col items-center justify-center   '>
                <div className='w-10/12 bg-white h-auto p-2 sm:p-4 rounded-b-xl '>
                    {/*header*/}
                    <div className='flex flex-col'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='w-12 md:w-20 h-12 md:h-20 bg-green-500 rounded  flex items-center justify-center'>
                                <p className='text-3xl font-bold text-white'>G</p>
                            </div>
                            <div className='flex items-center space-x-3 my-4 md:my-0'>
                                <div className='w-7 md:w-9 h-7 md:h-9 border shadow-2xl flex items-center justify-center rounded '>
                                    <AiOutlineSetting className='w-6 md:w-7 h-6 md:h-7  '/>
                                </div>
                                <div>
                                    <p className='bg-green-600 px-3 md:px-5 py-1 md:py-1.5 text-white font-semibold rounded'>New
                                        Post</p>
                                </div>
                            </div>

                        </div>
                        {/*name*/}
                        <div>
                            <div className='my-2 md:my-4'>
                                <p className='text-base sm:text-xl  md:text-3xl font-poppins font-bold '>Mollie Kiaundersso</p>
                            </div>
                            <div className='my-2'>
                                <p className='text-sm text-green-700 cursor-pointer hover:underline'>change name or
                                    description</p>
                            </div>
                            <div className='my-2'>
                                <p className='text-sm  '>start from 2121 21 21</p>
                            </div>
                        </div>
                    </div>

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
                <div className='w-10/12 bg-white h-auto  rounded-2xl p-2 sm:p-4 my-4'>
                    <div className='flex space-x-3 '>
                        <div className='w-7 h-7 rounded-full bg-green-400 flex justify-center items-center'>
                            <p className='font-bold text-white font-poppins '>G</p>
                        </div>
                        <p>post</p>
                    </div>
                    <div className='flex space-x-3'>
                        <div
                            className=' p-1.5 px-2 bg-red-100 flex  space-x-3 items-center rounded-2xl my-3 cursor-pointer'>
                            <HiOutlinePhotograph className='w-5 h-5 text-green-400'/>
                            <p className='whitespace-nowrap text-xs text-gray-600'>Photos && Video</p>
                        </div>
                        <div
                            className=' p-1.5 px-2 bg-red-100 flex items-center space-x-3 rounded-2xl my-3 cursor-pointer'>
                            <GrAttachment className='w-5 h-4 text-green-400'/>
                            <p className='whitespace-nowrap text-xs text-gray-600'>Attached</p>
                        </div>
                    </div>
                </div>
                <div className='w-10/12 bg-white h-96 rounded-t-2xl p-2 sm:p-4 my-4'>
                    <div className='w-full h-full flex flex-col items-center justify-center'>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque debitis delectus
                            dolore esse harum illo mollitia quis repudiandae ut. Aperiam autem beatae consequatur
                            cupiditate odit! Culpa dolorem perspiciatis tenetur?</p>
                        <div onClick={handlePost}  className='p-2 px-6 border rounded shadow-2xl my-4 bg-red-100 hover cursor-pointer'>
                            <p>Write Post</p>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default Profile