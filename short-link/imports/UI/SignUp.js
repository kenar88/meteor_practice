import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      // email: '',
      // password: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let email = this.inputMail.value.trim();
    let password = this.inputPass.value.trim();    

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
        console.log('SIGNUP_ERROR_OBJECT:', err);
      } else {
        this.setState({error: ''});
      }

    });
  }

  render() { 

    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
        <h1>Signup!</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form className=".boxed-view__form" onSubmit={this.onSubmit} noValidate>
          <input
            ref={(input) => { this.inputMail = input; }}
            type="email"
            name="email"
            placeholder="Email"
            />
          <input
            ref={(input) => { this.inputPass = input; }}
            type="password"
            name="password"
            placeholder="Password"
            />
          <button className="btn">Create account</button>
        </form>
        <h2>link to <Link to="/">Already have an account?</Link></h2>
        </div>
        
      </div>           
    );
  }
};

export default SignUp;

