import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Blogpost from "./Blogpost";
import Blog from "./Blog";
import Login from "./Login";



const Pages = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/blogposts/:blogId">
                <Blogpost />
            </Route>

            <Route exact path="/blogposts">
                <Blog />
            </Route>
            <Route path="/login">
                <Login />
            </Route>

        </Switch>
    )
}


export default Pages

