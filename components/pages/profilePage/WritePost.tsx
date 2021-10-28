import {FC, useState} from "react"

interface IWritePost {
    handlePost: () => void
}

const WritePost: FC<IWritePost> = ({handlePost}) => {

    return (
        <>
            <div className='w-full md:w-10/12 bg-white h-96 rounded-t-2xl p-2 sm:p-4 my-4 '>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque
                        debitis delectus
                        dolore esse harum illo mollitia quis repudiandae ut. Aperiam autem beatae consequatur
                        cupiditate odit! Culpa dolorem perspiciatis tenetur?</p>
                    <div onClick={handlePost}
                         className='p-2 px-6 border rounded shadow-2xl my-4 bg-red-100 hover cursor-pointer'>
                        <p>Write Post</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default WritePost