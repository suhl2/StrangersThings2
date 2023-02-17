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
                {
                    props.isLoggedIn ? <Link to="/profile">Profile</Link> : null
                }
                {
                    props.isLoggedIn ?  <Link to="/newpost">New Post</Link> : null
                }
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