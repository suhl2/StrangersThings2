import React, {useState} from "react";
import GetSinglePost from "./getsinglepost";

const SendMessage = (props) => {
    const [messageText, setMessageText] = useState("");
    const [messageSent, setMessageSent] = useState(false);

    const handleClick = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${props.postID}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.token}`
                },
                body: JSON.stringify({
                    message: {
                        content: `${messageText}`
                    }
                })
            })
            const result = await response.json();
            console.log(result);
            if (result.success) {
                setMessageSent(true);
            }
    } catch (error) {
        console.log(error);
    }
    }

    return(
        <>
            <GetSinglePost postID={props.postID} posts={props.posts} />
            {messageSent ? null : <form>
                <label>Message: <textarea onChange={event => setMessageText(event.target.value)}></textarea></label>
                <br />
                <button onClick={handleClick}>Send Message</button>
            </form>
}
            {
                messageSent ? <p>Your message has been sent!</p> : null
            }
        </>
    )
}

export default SendMessage;