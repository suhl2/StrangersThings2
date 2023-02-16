import React, {useState} from "react";


const NewPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [deliver, setDeliver] = useState(false);
    const handleClick = (event) => {
        event.preventDefault();
        console.log(deliver);
    }
    return (
        <div>
            <h1>New Sales Post</h1>
            <form>
                <label>Title<input type="text" onChange={event => setTitle(event.target.value)}/></label>
                <label>Description<input type="text" id="description" onChange={event => setDescription(event.target.value)}/></label>
                <label>Price<input type="text" onChange={event => setPrice(event.target.value)}/></label>
                <label>Location<input type="text" onChange={event => setLocation(event.target.value)}/></label>
                <div>
                    <label>Will Deliver<input type="checkbox" onChange={event => setDeliver(event.target.checked)}/></label>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>

    )
}

export default NewPost;