import React, { Component } from 'react';

import Footer from './Footer';
import Router from './Router';

import * as SMSpay from '../smspay';
import { products } from '../data.js';


class App extends Component {
  state = {
    cart: {},
    auth: null,
    login: false,
  };

  componentDidMount () {
    this.loadCart();
    this.loadAuth();

    setTimeout(() => this.checkAuth(), 1000);
    this.authTs = setInterval(() => this.checkAuth(), 60*1000);
  }

  componentWillUnmount () {
    clearInterval(this.authTs);
  }


  // Cart management

  loadCart = () => {
    const str = sessionStorage.getItem('smspay-cart');
    if(str) {
      this.setState({ cart: JSON.parse(str) });
    }
  };

  saveCart = cart => {
    sessionStorage.setItem('smspay-cart', JSON.stringify(cart));
  };

  addToCart = (id, qty = 1) => {
    const product = products.filter(p => p.id === id)[0];
    if(!product) {
      return;
    }

    // Add item to cart
    const cart = { ...this.state.cart };
    if(cart[id]) {
      cart[id].qty += qty;
    }
    else {
      cart[id] = {
        id: product.id,
        name: product.name,
        artist: product.artist,
        price: product.price,
        qty: qty,
      };
    }

    // Update state and save to sessionStorage
    this.setState({ cart });
    this.saveCart(cart);
  };

  removeFromCart = id => {
    // Remove item from cart
    const cart = { ...this.state.cart };
    delete cart[id];

    // Update state and save to sessionStorage
    this.setState({ cart });
    this.saveCart(cart);
  };

  updateCartItem = (id, qty) => {
    const product = products.filter(p => p.id === id)[0];
    if(!product) {
      return;
    }

    // Update item in cart
    const cart = { ...this.state.cart };
    if(cart[id]) {
      cart[id].qty = qty;
    }

    // Update state and save to sessionStorage
    this.setState({ cart });
    this.saveCart(cart);
  };

  clearCart = () => {
    // Update state and save to sessionStorage
    this.setState({ cart: {} });
    this.saveCart({});
  };


  // Login modal

  hideLogin = () => {
    this.setState({ login: false })
  };

  showLogin = () => {
    this.setState({ login: true })
  };


  // Authentication

  loadAuth = () => {
    const str = localStorage.getItem('smspay-auth');
    if(str) {
      this.setState({ auth: JSON.parse(str) });
    }
  };

  saveAuth = auth => {
    this.setState({ auth });
    // Save to cache
    localStorage.setItem('smspay-auth', JSON.stringify(auth));
  };

  clearAuth = () => {
    this.setState({ auth: null });
    // Remove from cache
    localStorage.removeItem('smspay-auth');
  };

  // Periodically check if the auth is valid
  checkAuth = () => {
    const { auth } = this.state;
    if(!auth) {
      return;
    }

    SMSpay.getMerchant(auth.merchantId, auth)
    .catch(err => {
      console.log('Error checking merchant status', err);
      this.clearAuth();
    });
  };


  render() {
    return (
      <div className="App">
        <Router
          cart={ this.state.cart }
          addToCart={ this.addToCart }
          removeFromCart={ this.removeFromCart }
          updateCartItem={ this.updateCartItem }
          clearCart={ this.clearCart }

          loginVisible={ this.state.login }
          hideLogin={ this.hideLogin }
          showLogin={ this.showLogin }

          auth={ this.state.auth }
          loadAuth={ this.loadAuth }
          saveAuth={ this.saveAuth }
          clearAuth={ this.clearAuth }
        />
        <Footer />
      </div>
    );
  }
}

export default App;
