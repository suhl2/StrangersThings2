import React from "react";
import deletePosts from "./deletePosts";
import { Navigate, useNavigate } from "react-router-dom";



const ListPosts = (props) => {
    const navigate = useNavigate();
    if (!props.searchTerm){
    return (
        props.posts.map(message => {
            let className = "post";
            props.setPostID(message._id);
            if(message.isAuthor) {
                className = "my-post"
            }
            return(
                <div className={className}>
                    <h2>{message.title}</h2>
                    <p>{message.description}</p>
                    <p>Price: {message.price}</p>
                    <p>Seller: {message.author.username}</p>
                    <p>Location: {message.location}</p>
                    {
                        message.willDeliver ? <p><i className="fa-solid fa-check"></i>Will Deliver</p> : null
                    }
                    {
                        message.isAuthor ? <button onClick={ () => deletePosts(message._id, props.token)}>Delete</button> : props.isLoggedIn ?
                        <button onClick={() => {props.setPostID(message._id); navigate("/message")}}>Send Message</button> : null
                    }
                </div>
            )
        })
    )
    } else {
        return (
            props.newPosts.map(message => {
                let className = "post";
                props.setPostID(message._id);
                if(message.isAuthor) {
                    className = "my-post"
                }
                return(
                    <div className={className}>
                        <h2>{message.title}</h2>
                        <p>{message.description}</p>
                        <p>Price: {message.price}</p>
                        <p>Seller: {message.author.username}</p>
                        <p>Location: {message.location}</p>
                        {
                            message.willDeliver ? <p><i className="fa-solid fa-check"></i>Will Deliver</p> : null
                        }
                        {
                            message.isAuthor ? <button onClick={ () => deletePosts(message._id, props.token)}>Delete</button> : props.isLoggedIn ?
                            <button onClick={() => {props.setPostID(message._id); navigate("/message")}}>Send Message</button> : null
                        }
                    </div>
                )
            })
        )
    }
}

export default ListPosts;