import React, {Component} from "react";

export default class User extends Component {
  render() {
    return (
      <div className="login">
        <a className="oauth-login" href="/login/google">Login</a>
      </div>
    );
  }
}