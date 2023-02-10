import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import NavBar from './navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ListPosts from './listposts';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const APIURL = 'https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/'

const Main = () => {
  const [posts, setPosts] = useState([]);
  const GetPosts = async () => {
    try {
      const response = await fetch(`${APIURL}/posts`)
      const result = await response.json();
      if (result.error) {
          throw result.error;
      }
      setPosts(result.data.posts);
      console.log(posts);
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
      <NavBar />
      <Routes>
        <Route path='/'></Route>
        <Route path='/posts'></Route>
        <Route path='/login'></Route>
      </Routes>
      <ListPosts posts={posts}/>
    </BrowserRouter>
    </>
  )
}

root.render(<Main />);