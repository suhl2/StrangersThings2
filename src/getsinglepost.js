import React from "react";

const GetSinglePost = (props) => {
    return (
        props.posts.map(message => {
            if (message._id === props.postID){
                return (
                    <>
                    <h1>Replying to:</h1>
                    <div className="post">
                    <h2>{message.title}</h2>
                    <p>{message.description}</p>
                    <p>Price: {message.price}</p>
                    <p>Seller: {message.author.username}</p>
                    <p>Location: {message.location}</p>
                    {
                        message.willDeliver ? <p><i className="fa-solid fa-check"></i>Will Deliver</p> : null
                    }
                    </div>
                    </>
                )
            }
        })
    )
}

export default GetSinglePost;