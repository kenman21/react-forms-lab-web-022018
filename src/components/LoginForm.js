import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleName = e => {
    this.setState({
      username: e.target.value
    });
  }

  handlePW = e => {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state.username, this.state.password)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlePW}/>
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
