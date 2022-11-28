import React, {Component, useState, useEffect} from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  // const updateEmail = ((e) => {
  //   setEmail(e.target.value)
  // })

  // const updatePassword = ((e) => {
  //   setPassword(e.target.value)
  // })

  // .then(res => res.json())
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
    </div>   
  )
}

// function LoginPage extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       Email: null,
//       Password: null,
//       Verified: null,
//     }
//     // this.handleSubmit= this.handleSubmit.bind(this)
//     this.updateEmail= this.updateEmail.bind(this)
//     this.updatePassword= this.updatePassword.bind(this)
//     this.handleSubmit= this.handleSubmit.bind(this)
//   }
//   updateEmail(event){
//     this.setState({...this.state, Email: event.target.value})
//   }
//   updatePassword(event){
//     this.setState({...this.state, Password: event.target.value})
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     const data = {Email: this.state.Email, Password: this.state.Password}
//     console.log(data, "DATA")
//     await fetch('/login', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(data),
//     }).then(res => res.json())
//       .then(data => {
//         if (data.verified) {
//           this.setState({...this.state, Verified: data.verified})
//         }
//       })
//     if (this.state.Verified) {
//       useNavigate('/mainpage');
//     }
//   }
//   render(){
//     return (
//       <div className="loginContainer">
//         <button className="login"><Link to = '/mainpage'>Login Fake</Link></button>
//         <form onSubmit={(e)=>this.handleSubmit(e)}>
//           <label>
//           Email:
//           <input type="text" name="email" value= {this.Email} onChange= {(event) => this.updateEmail(event)}/><br/>
//           </label>
//           <label>
//           Password:
//           <input type="password" name="password" value= {this.Password} onChange= {(event) => this.updatePassword(event)}/><br/>
//           </label>
//           <input type="submit" value="Login" />
//         </form>
//       </div>   
//     )
//   }
// }

export default LoginPage;