import React, {Component, useState, useEffect} from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function Signup(){
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [FirstName, setFirstName] = useState(null);
  const [LastName, setLastName] = useState(null);
  const [Linkedin, setLinkedin] = useState(null);
  const [YOE, setYOE] = useState(null);
  const [DevStatus, setDevStatus] = useState(null);
  const [Languages, setLanguages] = useState(null);
  const [CurrentRole, setCurrentRole] = useState(null);
  const [Location, setLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(email && password && FirstName && LastName && Linkedin && YOE && DevStatus && Languages && CurrentRole && Location){
      async function handleSubmit() {
        const data = {Email: email, Password: password, FirstName: FirstName, LastName: LastName, Linkedin: Linkedin, YOE: YOE, DevStatus: DevStatus, Languages: Languages, CurrentRole: CurrentRole, Location: Location}
        console.log(data, "DATA")
        await fetch('/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        })
        .then(data => {
          if (data.status === 200) {
            navigate('/mainpage')
          } else{
            console.log('Invalid Inputs')
          }
        })
      }
      handleSubmit()
    }}, [email, password, FirstName, LastName, Linkedin, YOE, DevStatus, Languages, CurrentRole, Location])
    
  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={(e)=> {
        e.preventDefault()
        setEmail(e.target[0].value)
        setPassword(e.target[1].value)
        setFirstName(e.target[2].value)
        setLastName(e.target[3].value)
        setLinkedin(e.target[4].value)
        setYOE(e.target[5].value)
        setDevStatus(e.target[6].value)
        setLanguages(e.target[7].value)
        setCurrentRole(e.target[8].value)
        setLocation(e.target[9].value)
      }}>
        <h2>Sign Up</h2>
        <input className="loginInput" type="text" name="email" placeholder="Email"/><br/>
        <input className="loginInput" type="password" name="password" placeholder="Password"/><br/>
        <input className="loginInput" type="text" name="FirstName" placeholder="First Name"/><br/>
        <input className="loginInput" type="text" name="LastName" placeholder="Last Name"/><br/>
        <input className="loginInput" type="text" name="Linkedin" placeholder="LinkedIn"/><br/>
        <input className="loginInput" type="number" name="YOE" placeholder="Years of Experience"/><br/>
        <input className="loginInput" type="text" name="DevStatus" placeholder="Dev Status"/><br/>
        <input className="loginInput" type="text" name="Languages" placeholder="Languages"/><br/>
        <input className="loginInput" type="text" name="CurrentRole" placeholder="Current Role"/><br/>        
        <input className="loginInput" type="text" name="Location" placeholder="Location"/><br/>
        <input className="loginBtn" type="submit" value="Sign Up" />
      </form>
    </div>   
  )
}

export default Signup;