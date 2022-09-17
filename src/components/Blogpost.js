import React from 'react';
import posts from '../data/posts.json';
import {useParams} from "react-router-dom";



const Blogpost = () => {
    console.log(posts)

    const {blogId} = useParams()

    return (

        <div className="blog-page">
            <h1>Title {posts[blogId].title}</h1>
            <p>{posts[blogId].date}</p>
            <p>{posts[blogId].content}</p>
        </div>
    )
}

export default Blogpost