import React, {FC} from 'react';

interface CommentProps {
    commentBar: boolean,
    handleCommentBar: () => void
}

const CommentBar: FC<CommentProps> = ({handleCommentBar,commentBar}) => {
    return (
        <div>
         <p onClick={handleCommentBar} className={`${!commentBar ? 'transform rotate-90' : ' mt-4'} text-lg cursor-pointer tracking-wide`}>
                Comments
         </p>
        </div>
    );
};

export default CommentBar;