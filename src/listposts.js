import React from "react";


const ListPosts = (props) => {
    return (
        props.posts.map(message => {
            return(
                <p>{message.location}</p>
            )
        })
    )
}

export default ListPosts;