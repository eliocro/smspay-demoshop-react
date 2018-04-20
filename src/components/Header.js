
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import { toBase36 } from '../helpers';


class Header extends Component {
  inputRef = React.createRef();

  logIn = ev => {
    ev.preventDefault();
    this.props.showLogin();
  }

  logOut = ev => {
    ev.preventDefault();
    this.props.clearAuth();
  }

  onSubmit = ev => {
    ev.preventDefault();
    const input = this.inputRef.current;
    this.props.history.push(`/order/0/${toBase36(input.value)}`);

    input.value = '';
    input.blur();
  }

  render () {
    const { cart, auth } = this.props;
    const numItems = cart ? Object.keys(cart).reduce((a,k) => a + cart[k].qty, 0) : 0;
    return (
      <header className="container">
        <div className="navbar navbar-inverse">
          <div className="navbar-inner">
            <div className="container">

              <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </a>

              <Link className="brand" to="/" >EksempelShop</Link>

              <div className="nav-collapse navbar-responsive-collapse">
                { auth ?
                  <ul className="nav">
                    <li><a>Hallo { auth.user }</a></li>
                    <li><a href="" onClick={ this.logOut }>Logg ut</a></li>
                  </ul>
                  :
                  <ul className="nav">
                    <li><a href="" onClick={ this.logIn }>Merchant Login</a></li>
                  </ul>
                }

                <form className="navbar-search pull-left" onSubmit={ this.onSubmit }>
                  <input type="text"
                    className="search-query span2"
                    placeholder="Søk SMSpay #"
                    pattern="[0-9]+"
                    ref={ this.inputRef }
                    required
                  />
                  <input type="submit" value="Search" hidden />
                </form>

                <ul className="nav pull-right">
                  <li><Link to="/cart">Vis handlekurv ({ numItems } items)</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
