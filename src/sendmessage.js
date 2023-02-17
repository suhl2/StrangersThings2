import React from "react";
import GetSinglePost from "./getsinglepost";

const SendMessage = (props) => {


    return(
        <>
            <GetSinglePost postID={props.postID} posts={props.posts} />
            <form>
                <label>Subject: <input type="text"></input></label>
                <br />
                <label>Message: <textarea></textarea></label>
            </form>
        </>
    )
}

export default SendMessage;