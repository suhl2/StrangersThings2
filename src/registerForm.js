import React, {useState} from "react";

const APIURL = 'https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/'

const RegisterForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const handleRegister = async () => {
        if(password.length < 6 || confirmPassword.length < 6) {
            setMessage("Passwords must be at least 6 characters long.")
        }
        if(password === confirmPassword) {
            const response = await fetch(`${APIURL}users/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify({
                        user: {
                            username: userName,
                            password: password
                        }
                    })
                }
            )
            const result = await response.json();
            window.localStorage.setItem("strangers-things-login", result.data.token);
            if(window.localStorage.getItem("strangers-things-login")){
                setMessage("You have successfully registered!");
            } else {
                setMessage("Something went wrong.");
            }
        } else {
            setMessage("Passwords don't match. Try again.")
        }
    }
    return (
        <div id="register-form">
            <form>
                <label>Username
                <input type="text" onChange={event => setUserName(event.target.value)}/>
                </label>
                <label>Password
                    <input type="text" minLength="6" onChange={event => setPassword(event.target.value)}/>
                </label>
                <label>Confirm Password
                    <input type="text" minLength="6" onChange={event => setConfirmPassword(event.target.value)}/>
                </label>
            </form>
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}

export default RegisterForm;