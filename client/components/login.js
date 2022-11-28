import React, {Component, useState, useEffect} from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(email && password){
      async function handleSubmit() {
        const data = {Email: email, Password: password}
        await fetch('/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        })
        .then(data => {
          if (data.status === 200) {
            navigate('/mainpage')
          } else{
            navigate('/signup')
          }
        })
      }
      handleSubmit()
    }}, [email, password])
  
    
    
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <img src="../imgs/logo.png" style={{maxHeight: '200px'}} />
        <form className="formContainer" onSubmit={(e)=> {
        e.preventDefault()
        setEmail(e.target[0].value)
        setPassword(e.target[1].value)
      }}>
        <input className="loginInput" type="text" name="email" placeholder="Email"/><br/>
        <input className="loginInput" type="password" name="password" placeholder="Password"/><br/>
        <input className="loginBtn" type="submit" value="Login" />
      </form>
      <button className="loginBtn"><Link style={{textDecoration: "none", color:"white"}}to = '/signup'>Sign Up</Link></button>
      </div>
    </div>   
  )
}

export default LoginPage;