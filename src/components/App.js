import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import Router from './Router';

import { products } from '../data.js';


class App extends Component {
  state = {
    cart: {}
  };

  loadCart () {
    const cached = sessionStorage.getItem('smspay-cart');
    if(!cached) {
      return;
    }
    this.setState({ cart: JSON.parse(cached) });
  }

  saveCart () {
    const cart = { ...this.state.cart };
    sessionStorage.setItem('smspay-cart', JSON.stringify(cart));
  }

  componentWillMount () {
    this.loadCart();
  }

  addToCart = (id, qty) => {
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
    this.saveCart();
  };

  removeFromCart = id => {
    // Remove item from cart
    const cart = { ...this.state.cart };
    delete cart[id];

    // Update state and save to sessionStorage
    this.setState({ cart });
    this.saveCart();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router addToCart={ this.addToCart } />
        <Footer />
      </div>
    );
  }
}

export default App;
