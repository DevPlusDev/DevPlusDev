import React, {Component} from "react";
import { Outlet, Link } from "react-router-dom";

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      Email: null,
      Password: null,
      FirstName: null,
      LastName: null,
      Linkedin: null,
      YOE: null,
      DevStatus: null,
      Languages: null,
      CurrentRole: null,
      Location: null
    }
    this.handleSubmit= this.handleSubmit.bind(this)
    this.updateEmail= this.updateEmail.bind(this)
    this.updatePassword= this.updatePassword.bind(this)
    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.updateLinkedIn = this.updateLinkedIn.bind(this)
    this.updateYOE = this.updateYOE.bind(this)
    this.updateDevStatus = this.updateDevStatus.bind(this)
    this.updateLanguages = this.updateLanguages.bind(this)
    this.updateCurrentRole = this.updateCurrentRole.bind(this)
    this.updateLocation =this.updateLocation.bind(this)
  }
  updateEmail(event){
    this.setState({...this.state, Email: event.target.value})
  }
  updatePassword(event){
    this.setState({...this.state, Password: event.target.value})
  }
  updateFirstName(event){
    this.setState({...this.state, FirstName: event.target.value})
  }
  updateLastName(event){
    this.setState({...this.state, LastName: event.target.value})
  }
  updateLinkedIn(event){
    this.setState({...this.state, Linkedin: event.target.value})
  }
  updateYOE(event){
    this.setState({...this.state, YOE: event.target.value})
  }
  updateDevStatus(event){
    this.setState({...this.state, DevStatus: event.target.value})
  }
  updateLanguages(event){
    this.setState({...this.state, Languages: event.target.value})
  }
  updateCurrentRole(event){
    this.setState({...this.state, CurrentRole: event.target.value})
  }
  updateLocation(event){
    this.setState({...this.state, Locations: event.target.value})
  }

  async handleSubmit(event){
    event.preventDefault();
    const data = {email: this.state.Email, password: this.state.Password}
    await fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    }).then((result)=>{
      console.log(result)
    })
  }
  render(){
    return (
      <div className="loginContainer">
        <button className="Signup"><Link to = '/signup'>Login Fake</Link></button>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label>
          Email:
          <input type="text" name="Email" value= {this.Email} onChange= {(event) => this.updateEmail(event)}/><br/>
          </label>
          <label>
          Password:
          <input type="password" name="Password" value= {this.Password} onChange= {(event) => this.updatePassword(event)}/><br/>
          </label>
          <label>
          First Name:
          <input type="text" name="FirstName" value= {this.FirstName} onChange= {(event) => this.updateFirstName(event)}/><br/>
          </label>
          <label>
          Last Name:
          <input type="text" name="LastName" value= {this.LastName} onChange= {(event) => this.updateLastName(event)}/><br/>
          </label>
          <label>
          Linkedin:
          <input type="text" name="Linkedin" value= {this.Linkedin} onChange= {(event) => this.updateLinkedin(event)}/><br/>
          </label>
          <label>
          YOE:
          <input type="text" name="YOE" value= {this.YOE} onChange= {(event) => this.updateYOE(event)}/><br/>
          </label>
          <label>
          DevStatus:
          <input type="text" name="DevStatus" value= {this.DevStatus} onChange= {(event) => this.updateDevStatus(event)}/><br/>
          </label>
          <label>
          Languages:
          <input type="text" name="Languages" value= {this.Languages} onChange= {(event) => this.updateLanguages(event)}/><br/>
          </label>
          <label>
          CurrentRole:
          <input type="text" name="CurrentRole" value= {this.CurrentRole} onChange= {(event) => this.updateCurrentRole(event)}/><br/>
          </label>
          <label>
          Location:
          <input type="text" name="Location" value= {this.Location} onChange= {(event) => this.updateLocation(event)}/><br/>
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>   
    )
  }
}

export default Signup;