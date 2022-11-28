import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import {render} from 'react-dom'
import App from './components/App'
import LoginPage from './components/login'

export default function Start(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginPage/>}></Route>
        <Route path = "/mainpage" element = {<App/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};

render(<Start/>, document.getElementById('root'))