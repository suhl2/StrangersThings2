import React from "react";

const Register = () => {
    return (
        <div id="register-form">
            <form>
                <label>Username
                <input type="text"/>
                </label>
                <label>Password
                    <input type="text"/>
                </label>
                <label>Confirm Password
                    <input type="text"/>
                </label>
            </form>
            <button>Register</button>
        </div>
    )
}

export default Register;