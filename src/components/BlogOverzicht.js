import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";


const BlogOverzicht = () => {


    return (<div>
       <h2> Er zijn {posts.length} blogs!</h2>

        {posts.map((post) => {
           return <Link key={post.id} to={`/blogposts/${post.id}`} ><ul><li>{post.title}</li></ul></Link>
        })}
    </div>)
}


export default BlogOverzicht