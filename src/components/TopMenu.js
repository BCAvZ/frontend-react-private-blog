import React from 'react';
import { NavLink } from "react-router-dom";


const TopMenu = (loginStatus) => {

    console.log(loginStatus) // Waarom is dit opeens een object? Er word een boolean doorgegeven.
    return (
        <nav  >
            <NavLink to="/" exact >home</NavLink>
            {loginStatus.loginStatus ? <NavLink to="/login" exact >logout</NavLink>:<NavLink to="/login" exact >login</NavLink>}
            {loginStatus.loginStatus && <NavLink to="/blogposts" exact >blog</NavLink>}
        </nav>
    )
}


export default TopMenu

