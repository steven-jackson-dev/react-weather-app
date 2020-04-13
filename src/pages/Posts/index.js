import React, { useState, useEffect } from 'react'
import PostItem from './components/PostItem.js'
import { fetchPostsData } from 'api'
import { ListGroup } from 'react-bootstrap'

const Posts = () => {
    const [posts, setPosts] = useState(false)
    useEffect(() => { getPostData() }, [])

    const getPostData = async () => {
        try {
            const postData = await fetchPostsData();
            setPosts(postData)
        } catch (error) {
            console.warn(error)
        }
    }
    return (
        <section className="Posts" style={{ textAlign: 'center', margin: '2em 0' }}>
                <h2>Posts Page</h2>
            {!posts && <div>Loading</div>}
            <ListGroup>
                {(posts.length > 0) && posts.map(post => { return <ListGroup.Item key={post.id}><PostItem  post={post} /></ListGroup.Item> })}
                </ListGroup>
        </section>
    )
}

export default Posts
