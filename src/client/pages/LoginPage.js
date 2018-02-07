import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Helmet } from 'react-helmet';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false,
      togglePassword: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    //console.log(password);
    const data = {};
    data.username = username;
    data.password = password;
    this.props.loginUser(data);
  }

  head() {
    return (
      <Helmet>
        <title>Here</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    console.log('login', this.props);
    const { username, password, submitted } = this.state;
    return (
      <div className="c-accounts__container">
        <h3>Login</h3>
          <form
            name="form"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="c-input__container">
              <div className="c-input__group">
                <label className="c-login__label" tabIndex="-1">E-mail</label>
                <input
                  type="text"
                  className="c-input__input u-no-zoom"
                  name="username"
                  value={username}
                  placeholder="Username or E-mail"
                  onChange={this.handleChange}
                />

                {submitted && !username &&
                  <div
                    className="c-input__message-container"
                    role="alert"
                  >
                    <p className="c-input__message--error">
                      Please enter your username
                    </p>
                  </div>
                    }

              </div>
            </div>
            <div className="c-input__container">
              <div className="c-input__group">


                <div className="c-login__password">
                  <input
                    type="password"
                    className="c-login__input"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="c-login__actions">
              <button
                className="g-button g-button--blue u-expand"
                name="submit"
                type="submit"
              >
                  Log In
              </button>
            </div>
          </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, content } = state;
  return {
    users,
    content
  };
}

export default {
  component: connect(mapStateToProps, { loginUser })(LoginPage)
};
