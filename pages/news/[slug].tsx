import React from 'react';
import Layout from "@/components/Layout";
import PostComments from "@/components/post/postComments";
// @ts-ignore
import data from '/data'

const CommentOfPost = () => {
    console.log(data)
    return (
        <Layout title='News'>
           <PostComments />
        </Layout>
    );
};

export default CommentOfPost;