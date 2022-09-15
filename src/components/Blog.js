import React from 'react';
import posts from '../data/posts.json';
import { Link } from "react-router-dom";

console.log(posts);

// const Blog = () => {
//
//     const titles = []
//
//     posts.title.forEach((post) => {
//         titles.push(<p className="blogTitles"> {post}</p>)
//     })
//
//     return (<div>
//             {posts.length}
//
//             {titles}
//             {posts[0].title}
//         </div>)
// }

const Blog = () => {

    // const titles = []
    //
    // posts.title.titles((post) => {
    //     titles.push(<p className="blogTitles"> {post}</p>)
    // })

    return (<div>
        {posts.length}

        {posts[0].title}

        {posts.map((post) => {
           return <Link to={post.title}><p>{post.title}</p></Link>
        })}
    </div>)
}


export default Blog