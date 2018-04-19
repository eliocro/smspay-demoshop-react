import React, { Component } from 'react';

import Footer from './Footer';
import Router from './Router';

import { products } from '../data.js';


class App extends Component {
  state = {
    cart: {}
  };

  loadCart () {
    const str = sessionStorage.getItem('smspay-cart');
    str && this.setState({ cart: JSON.parse(str) });
  }

  saveCart (cart) {
    const str = JSON.stringify(cart);
    sessionStorage.setItem('smspay-cart', str);
  }

  componentWillMount () {
    this.loadCart();
  }

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
  }

  render() {
    return (
      <div className="App">
        <Router
          cart={ this.state.cart }
          addToCart={ this.addToCart }
          removeFromCart={ this.removeFromCart }
          updateCartItem={ this.updateCartItem }
        />
        <Footer />
      </div>
    );
  }
}

export default App;
