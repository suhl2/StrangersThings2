import React from "react";
import GetMyPosts from "./getmyposts";
import GetMyMessages from "./getmymessages";

const Profile = (props) => {
    return (
        <>
        <h1>My Profile</h1>
            <div id="my-posts">
                <h2>My Posts</h2>
                <GetMyPosts token={props.token}/>
            </div>
            <div id="my-messages">
                <h2>My messages</h2>
                <GetMyMessages token={props.token} />
            </div>
        </>
    )
}

export default Profile;