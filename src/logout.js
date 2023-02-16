import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    window.localStorage.removeItem("strangers-things-login");
    useNavigate("/");
}

export default Logout