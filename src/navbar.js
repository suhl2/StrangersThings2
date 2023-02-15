import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <>
        <div id="navbar">
            <h1>Stranger's Things</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/login">Login</Link>
                {
                    props.isLoggedIn ? null : <Link to="/register">Register</Link>
                }   
            </nav>
        </div>
        </>
    )
}

export default NavBar;