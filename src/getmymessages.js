import React, {useEffect, useState} from "react";

const GetMyMessages = (props) => {
    const [userMessages, setUserMessages] = useState([]);
    const getMessages = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/me', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.token}`
            },
        })
        const result = await response.json();
        setUserMessages(result.data.messages)
    } 
    useEffect( () => {
        getMessages();
      });

      return (
        userMessages.map(message => {
            return (
                <div className="my-post">
                    <h2>Regarding: {message.post.title}</h2>
                    <p>From {message.fromUser.username}</p>
                    <p>{message.content}</p>
                </div>
            )

        })
      )
}

export default GetMyMessages;