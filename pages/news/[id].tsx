import React from 'react';
import Layout from "@/components/Layout";
import PostComments from "@/components/post/postComments";
// @ts-ignore



const CommentOfPost = () => {

    return (
        <Layout title='News'>
            <div>
                <PostComments />
            </div>
        </Layout>
    );
};

export default CommentOfPost;

