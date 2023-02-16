import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: userName,
                        password: password
                    }
                })
            }) 
            const result = await response.json();
            console.log(result);
            console.log(result.success);
            if(result.success) {
                window.localStorage.setItem("strangers-things-login", result.data.token);
                setMessage("Login Successful");
                navigate("/");
                window.location.reload(false);

            } else {
                setMessage("Login Failed");
            }
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div id="register-form">
            <form>
                <label>Username <input type="text" onChange={event => setUserName(event.target.value)} /></label>
                <label>Password <input type="text" onChange={event => setPassword(event.target.value)}/></label>
                <button onClick={handleLogin}>Log In</button>
                <Link to="/register">Register</Link>
                <p>{userName}</p>
                <p>{password}</p>
                <p>{message}</p>
            </form>
        </div>
    )
}

export default Login;