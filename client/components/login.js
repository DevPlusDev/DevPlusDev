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
        console.log(data, "DATA")
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
      <form onSubmit={(e)=> {
        e.preventDefault()
        setEmail(e.target[0].value)
        setPassword(e.target[1].value)
      }}>
        <label>
        Email:
        <input type="text" name="email"/><br/>
        </label>
        <label>
        Password:
        <input type="password" name="password"/><br/>
        </label>
        <input type="submit" value="Login" />
      </form>
      <button className="Signup"><Link to = '/signup'>Sign Up</Link></button>
    </div>   
  )
}

export default LoginPage;