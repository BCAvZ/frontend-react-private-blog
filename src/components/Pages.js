import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Blogpost from "./Blogpost";
import BlogOverzicht from "./BlogOverzicht";
import Login from "./Login";
import TopMenu from './TopMenu';
import PrivateRoute from "./PrivateRoute";

const Pages = () => {
// We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    console.log(isAuthenticated)

    return (
        <>
            <TopMenu
                loginStatus={isAuthenticated}
            />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                    {/*<Route path="/blogposts/:blogId">*/}
                    {/*    {isAuthenticated === true ? <Blogpost /> : <Redirect to="/"/>}*/}
                    {/*</Route>*/}

                    <PrivateRoute path="/blogposts/:blogId" isAuth={isAuthenticated}>
                        <Blogpost />
                    </PrivateRoute>

                    {/*<Route exact path="/blogposts">*/}
                    {/*    isAuthenticated === true ? <BlogOverzicht /> : <Redirect to="/"/>}*/}
                    {/*</Route>*/}

                    <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                        <BlogOverzicht />
                    </PrivateRoute>

                }
                <Route path="/login">
                    <Login
                        login={() => toggleIsAuthenticated(!isAuthenticated)}
                        isLoggedIn={isAuthenticated}
                    />
                </Route>

            </Switch>
        </>
    )
}


export default Pages

