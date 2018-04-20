
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  logIn = ev => {
    ev.preventDefault();
    this.props.showLogin();
  }

  logOut = ev => {
    ev.preventDefault();
    this.props.clearAuth();
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

                <form className="navbar-search pull-left" onClick={ this.props.findOrder }>
                  <input type="text" className="search-query span2" placeholder="Søk SMSpay #"
                    ng-model="orderId" pattern="[0-9]*" />
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

export default Header;
