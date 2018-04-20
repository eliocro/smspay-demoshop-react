
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import StoreFront from './StoreFront';
import Album from './Album';
import Cart from './Cart';
import Checkout from './Checkout';
import Order from './Order';
import NotFound from './NotFound';
import Login from './Login';


const Router = props => (
  <BrowserRouter>
    <div>
      <Header
        cart={ props.cart }
        auth={ props.auth }
        showLogin={ props.showLogin }
        clearAuth={ props.clearAuth }
      />
      <Switch>
        <Route exact path="/" component={ StoreFront } />
        <Route path="/product/:productId/:productName" component={ _props => (
          <Album {..._props} addToCart={ props.addToCart } />
        ) } />
        <Route exact path="/cart" component={ _props => (
          <Cart { ..._props }
            cart={ props.cart }
            removeFromCart={ props.removeFromCart }
            updateCartItem={ props.updateCartItem }
            auth={ props.auth }
            showLogin={ props.showLogin }
          />
        ) } />
        <Route exact path="/checkout" component={ _props => (
          <Checkout { ..._props }
            cart={ props.cart }
            auth={ props.auth }
            clearCart={ props.clearCart }
          />
        ) } />
         <Route path="/order/:isNew/:orderId" component={ _props => (
          <Order {..._props} auth={ props.auth } />
        ) } />
        <Route component={ NotFound } />
      </Switch>
      <Login
        visible={ props.loginVisible }
        hideLogin={ props.hideLogin }
        saveAuth={ props.saveAuth }
      />
    </div>
  </BrowserRouter>
);

export default Router;
