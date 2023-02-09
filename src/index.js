import React from 'react';
import {createRoot} from 'react-dom/client';
import NavBar from './navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Main = () => {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'></Route>
        <Route path='/posts'></Route>
        <Route path='/login'></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

root.render(<Main />);