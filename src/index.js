import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import NavBar from './navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ListPosts from './listposts';
import RegisterForm from './registerForm';
import Login from './login';
import Logout from './logout';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const APIURL = 'https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/'

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem("strangers-things-login"));

  const GetPosts = async () => {
    try {
      const response = await fetch(`${APIURL}posts`)
      const result = await response.json();
      if (result.error) {
          throw result.error;
      }
      setPosts(result.data.posts);
  } catch (err) {
      console.log(err);
  }
  }

  useEffect( () => {
    GetPosts();
  })

  return (
    <>
    <BrowserRouter>
      <NavBar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path='/' element={<div id='all-posts'>
        <ListPosts posts={posts}/>
      </div>}></Route>
        <Route path='/posts' element={<Logout />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<RegisterForm />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

root.render(<Main />);