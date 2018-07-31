import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '', 
    };
  }

  // componentDidMount () {
  //   console.log('HISTORY:', this.props.history);
  // }

  onSubmit = (e) => {
    e.preventDefault();
  
    let email = this.inputMail.value.trim();
    let password = this.inputPass.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
      console.log("LOGIN_ERROR_OBJECT:", err);
    });
  }

  render() {
    return (
      <div>
        <h1>Short link!</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
         <form onSubmit={this.onSubmit} noValidate>
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
          <button>Login</button>
        </form>
        <h2>Link to <Link to="/signup">Have an account?</Link></h2>
      </div>
    ); 
  }
};

export default Login;