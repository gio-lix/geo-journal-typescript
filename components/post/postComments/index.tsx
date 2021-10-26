import React, {FC, useEffect, useState} from "react"
import {BsThreeDots} from "react-icons/bs";
// @ts-ignore
import data from '/data'
import Comments from "@/components/comments";





const PostComments: FC = () => {
    const [active, setActive] = useState(0);
    const [size, setSize] = useState(false)
    const [addText, setAddText] = useState('')



    const commentsData = data.comments[active ? "news" : "popular"]



    const handlerAddComment = () => {
        setSize(false)
        setAddText('')
    }
    return (
        <>
            <div className='w-full max-w-3xl'>
                <div className='w-full  h-20 bg-white rounded-t-xl'>
                    <div className='flex items-center justify-between px-3'>
                        <p className='text-lg font-bold '>G</p>
                        <BsThreeDots className='w-6 h-6'/>
                    </div>
                </div>
                <div className='border bg-white '>
                    dsfdsfds dfdsfds dsdfdsf
                    <div className='h-36 w-full bg-green-100'>

                    </div>
                </div>
                <div className='w-full h-[56px] bg-white rounded-b-xl'>

                </div>
                {/*comments*/}
                <div className='bg-white rounded-2xl my-2 p-2 px-20'>
                    <div className='flex flex-col justify-between w-full h-20 bg-white border-b border-yellow-400'>
                        <p className='text-lg'>Comments</p>
                        <div className='flex space-x-4'>
                            <p onClick={() => setActive(0)} className={`cursor-pointer ${!active && 'border-b-2 border-green-400'} `}> Popular</p>
                            <p onClick={() => setActive(1)} className={`cursor-pointer ${active && 'border-b-2 border-green-400'}`}> news</p>
                        </div>
                    </div>
                    <div className='mt-2 relative'>
                     <textarea onChange={e => setAddText(e.target.value)} value={addText} placeholder='write text... '
                               rows={!size ? 1.5 : 6}
                               className={`border border-gray-400 bp-10 resize-none p-1  px-2 outline-none bg-gray-100 w-full `}
                               onClick={() => setSize(true)}
                     >
                     </textarea>
                        {size && <button  onClick={handlerAddComment} className='absolute right-3 bottom-5 px-5 bg-green-400 hover:bg-green-800 text-white font-bold'>Submit</button>}
                    </div>
                    <div className='mt-4'>
                        {commentsData.map((obj: any) => <Comments  key={obj.id} text={obj.text} createdAt={obj.createdAt} user={obj.user} />)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostComments