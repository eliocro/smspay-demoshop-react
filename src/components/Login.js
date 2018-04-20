
import React, { Component } from 'react';

import * as SMSpay from '../smspay';


class Login extends Component {
  state = {
    loginError: ''
  };

  userRef = React.createRef();
  passRef = React.createRef();

  hideModal = ev => {
    ev.preventDefault();
    this.setState({ loginError: null });
    this.props.hideLogin();
  }

  onSubmit = ev => {
    ev.preventDefault();
    this.setState({ loginError: null });

    const [ username, password ] = [ this.userRef, this.passRef ].map(i => i.current.value);
    if(!username || !password) {
      this.setState({ loginError: 'Invalid username or password' });
      return;
    }

    SMSpay.login(username, password)
    .then(auth => {
      console.log('Auth', auth);
      this.props.saveAuth(auth);
      this.props.hideLogin();
    })
    .catch(err => {
      console.log(err);
      this.setState({ loginError: err.message });
    });
  }

  render () {
    const { visible } = this.props;
    if(!visible) {
      return null;
    }

    return (
      <section className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="close" onClick={ this.hideModal }>&times;</button>
            <h3>Merchant Login</h3>
          </div>
          <form className="form-horizontal" onSubmit={ this.onSubmit } style={{ margin: 0 }}>
            <div className="modal-body">
              <div className="control-group">
                <label className="control-label">Username</label>
                <div className="controls">
                  <input type="text" id="inputEmail" placeholder="Username"  ref={ this.userRef } required />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Password</label>
                <div className="controls">
                  <input type="password" id="inputPassword" placeholder="Password" ref={ this.passRef }  required />
                </div>
              </div>
              { this.state.loginError ?
                <div className="alert alert-danger" style={{ margin: 0 }}>{ this.state.loginError }</div>
              : '' }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" onClick={ this.hideModal }>Cancel</button>
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
