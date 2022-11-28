import React, {Component} from "react";
import { Outlet, Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      Email: null,
      Password: null
    }
    // this.handleSubmit= this.handleSubmit.bind(this)
    this.updateEmail= this.updateEmail.bind(this)
    this.updatePassword= this.updatePassword.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }
  updateEmail(event){
    this.setState({...this.state, Email: event.target.value})
  }
  updatePassword(event){
    this.setState({...this.state, Password: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {Email: this.state.Email, Password: this.state.Password}
    console.log(data, "DATA")
    await fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }).then(result => {
      console.log(result)
    })
  }
  render(){
    return (
      <div className="loginContainer">
        <button className="login"><Link to = '/mainpage'>Login Fake</Link></button>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label>
          Email:
          <input type="text" name="email" value= {this.Email} onChange= {(event) => this.updateEmail(event)}/><br/>
          </label>
          <label>
          Password:
          <input type="password" name="password" value= {this.Password} onChange= {(event) => this.updatePassword(event)}/><br/>
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>   
    )
  }
}

export default LoginPage;