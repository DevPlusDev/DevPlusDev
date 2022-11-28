import React, {Component} from "react";
import { Outlet, Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: null,
      password: null
    }
    // this.handleSubmit= this.handleSubmit.bind(this)
    this.updateEmail= this.updateEmail.bind(this)
    this.updatePassword= this.updatePassword.bind(this)
  }
  updateEmail(event){
    this.setState({...this.state, username: event.target.value})
  }
  updatePassword(event){
    console.log(event.target.value);
    this.setState({...this.state, password: event.target.value})
  }
  handleSubmit(event){
    console.log('test')
    event.preventDefault();
    const data = {email: this.state.email, password: this.state.password}
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'Application/JSON'},
      body: JSON.stringify(data),
    }).then((result)=>{
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
          <input type="text" name="email" value= {this.email} onChange= {(event) => this.updateEmail(event)}/><br/>
          </label>
          <label>
          Password:
          <input type="password" name="password" value= {this.password} onChange= {(event) => this.updatePassword(event)}/><br/>
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>   
    )
  }
}

export default LoginPage;