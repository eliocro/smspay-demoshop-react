
import React, { Component } from 'react';

class Header extends Component {
  render () {
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

              <a className="brand" href="/">EksempelShop</a>
              <div className="nav-collapse navbar-responsive-collapse">
                <ul className="nav">
                  <li><a href="/">Hjem</a></li>
                </ul>

                <form className="navbar-search pull-left" onClick={ this.props.findOrder }>
                  <input type="text" className="search-query span2" placeholder="Søk SMSPay #"
                    ng-model="orderId" pattern="[0-9]*" />
                  <input type="submit" value="Search" style={{ display: 'none' }} />
                </form>
                <ul className="nav pull-right">
                  <li><a href="/cart">Vis handlekurv (0 items)</a></li>
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
