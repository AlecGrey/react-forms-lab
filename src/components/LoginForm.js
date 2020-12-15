import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = (event) => {
    event.preventDefault()
    if (this.state.username === '' || this.state.password === '') {
      // console.log('You cannot leave a field blank!')
      return
    }

    this.props.handleLogin(this.state)
  }

  handleOnChange = (event) => {
    if (event.target.id === 'username') {
      this.setState({username: event.target.value})
    } else if (event.target.id === 'password') {
      this.setState({password: event.target.value})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin} onChange={ this.handleOnChange }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
