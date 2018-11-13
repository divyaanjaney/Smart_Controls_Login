import React, { Component } from 'react';
import axios from '../axios/axios';


class Login extends Component {
  constructor() {
    super();
    this.state = {
       details : {
         email : '',
         password : ''
       }
    }
  }

  emailDetails = (evt, val) => {
    let newDetails = this.state.details;
    newDetails[val] = evt.target.value;
    this.setState({ details : newDetails});
  }

  onSubmitEmail() {
    console.log(this.state.details);
    return axios({method: 'post',
		data: JSON.stringify(this.state.details),
		url: 'http://18.197.144.240:3000/auth/login'}).then((response) =>{
      console.log(response);
    }).catch((err) =>{
      console.log(err);
    });
  }

  render() {
    return (
        <div style={{'margin':'250px 450px', 'backgroundColor':'blue', 'width':'25%', 'padding': '32px'}} className='container'>
		      <div className='row'>
				    <div className='col-md-12' style={{'margin':'2px'}}>
				    <input type='text' onChange={(evt) => this.emailDetails(evt,'email')} placeholder="email id"/>
				    </div>
				    <div className='col-md-12' style={{'margin':'2px'}}>
				        <input type='text' onChange={(evt) => this.emailDetails(evt,'password')} placeholder="Password"/>
				    </div>
				    <div className='col-md-12' style={{'margin':'2px'}}>
				      <button type="button" className="btn btn-primary" style={{'margin':'0px 48px'}} onClick={this.onSubmitEmail.bind(this)}>Submit</button>
          </div>
          </div>
        </div>
    );
    }
}

export default Login;
