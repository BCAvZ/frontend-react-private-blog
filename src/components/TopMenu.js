import React from 'react';
import { NavLink } from "react-router-dom";

const TopMenu = () => {
    return (
        <nav  >
            <NavLink to="/" exact >home</NavLink>
            <NavLink to="/login" exact >login</NavLink>
            <NavLink to="/blogposts" exact >blog</NavLink>
        </nav>
    )
}


export default TopMenu

