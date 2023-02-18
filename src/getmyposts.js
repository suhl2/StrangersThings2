import React, {useEffect, useState} from "react";

const GetMyPosts = (props) => {
    const [userPosts, setUserPosts] = useState([]);
    const [userMessages, setUserMessages] = useState([]);
    const getPosts = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.token}`
            },
        })
        const result = await response.json();
        setUserPosts(result.data.posts);
        setUserMessages(result.data.messages)
        console.log(userMessages);
    } 
    useEffect( () => {
        getPosts();
      });

      return (
        userPosts.map(message => {
            return (
                <div className="my-post">
                    <h2>{message.title}</h2>
                    <p>{message.description}</p>
                    <p>Price: {message.price}</p>
                    <p>Seller: {message.author.username}</p>
                    <p>Location: {message.location}</p>
                    {
                        message.willDeliver ? <p><i className="fa-solid fa-check"></i>Will Deliver</p> : null
                    }
                    {
                        message.active ? null : <p><em>This listing is inactive</em></p>
                    }
                </div>
            )

        })
      )
}

export default GetMyPosts;