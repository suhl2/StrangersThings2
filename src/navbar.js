import React from "react";
import { Link } from "react-router-dom";
import Logout from "./logout";

const NavBar = (props) => {
    return (
        <>
        <div id="navbar">
            <h1>Stranger's Things</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                {
                    props.isLoggedIn ? null : <Link to="/login">Login</Link>
                }
                {          
                    props.isLoggedIn ? <Link to="/" onClick={Logout}>Logout</Link> : null
                }   
            </nav>
        </div>
        </>
    )
}

export default NavBar;