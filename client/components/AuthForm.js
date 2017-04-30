import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.onFormSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form
          className="col s6"
          onSubmit={this.onFormSubmit.bind(this)}
          >
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </div>
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}</div>)}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
