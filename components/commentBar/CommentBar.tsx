import React, {FC} from 'react';
import SideComments from "@/components/SideComments/SidebarComments";

interface CommentProps {
    commentBar: boolean,
    handleCommentBar: () => void
}

const CommentBar: FC<CommentProps> = ({handleCommentBar,commentBar}) => {
    return (
        <>
            <div className=' w-full  h-full'>
                <div className={`flex ${commentBar ? 'justify-center' : 'mt-20'}  `}>
                    <p onClick={handleCommentBar} className={`${!commentBar ? 'transform rotate-90' : ' mt-4'} text-lg cursor-pointer tracking-wide`}>
                        Comments
                    </p>
                </div>
                <div className=' w-full px-4 mt-5'>
                    {commentBar && (
                        <div className='flex flex-col space-y-4'>
                            <SideComments />
                        </div>
                    )}
                </div>
            </div>

        </>
    );
};

export default CommentBar;