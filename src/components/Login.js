import React from 'react';
import { Link } from "react-router-dom";

const Login = ({login, isLoggedIn}) => {
    return (
        <div>
            {isLoggedIn ?

                <button onClick={login}> <Link to="/Home">Uitloggen</Link> </button>

                :

                <button onClick={login}> <Link to="/blogposts">Inloggen</Link> </button>}
        </div>
    )
}


export default Login


//
// {(e) => toggleLoginStatus(!isLoggedIn)}