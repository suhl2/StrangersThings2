import React, {useState} from "react";


const NewPost = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [deliver, setDeliver] = useState(false);
    const [message, setMessage] = useState("");
    const createPost = async () => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.token}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,
                        location: location,
                        willDeliver: deliver
                    }
                })
            })
            const result = await response.json;
            setMessage("Your post has been made!");
    } catch (error) {
        console.log(error);
    }   
    } 
    const handleClick = (event) => {
        event.preventDefault();
        createPost();
        
    }
    return (
        <div>
            <h1>New Sales Post</h1>
            <form className="new-post">
                <label>Title<input type="text" onChange={event => setTitle(event.target.value)}/></label>
                <label>Description<textarea rows={4} cols={40} onChange={event => setDescription(event.target.value)}/></label>
                <label>Price<input type="text" onChange={event => setPrice(event.target.value)}/></label>
                <label>Location<input type="text" onChange={event => setLocation(event.target.value)}/></label>
                <label>Will Deliver<input type="checkbox" onChange={event => setDeliver(event.target.checked)}/></label>
                <button onClick={handleClick}>Submit</button>
                <p>{message}</p>
            </form>
        </div>

    )
}

export default NewPost;