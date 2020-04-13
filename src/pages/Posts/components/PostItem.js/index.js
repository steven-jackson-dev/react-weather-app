import React from 'react'


const PostItem = ({ post }) => {
    return (
        <>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
        </>
    )
}

export default PostItem
