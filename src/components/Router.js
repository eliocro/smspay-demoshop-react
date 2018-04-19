
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import StoreFront from './StoreFront';
import Album from './Album';
import NotFound from './NotFound';


const Router = props => (
  <BrowserRouter>
    <div>
      <Header cart={ props.cart } />
      <Switch>
        <Route exact path="/" component={ StoreFront } />
        <Route path="/product/:productId/:productName"
          component={ _props => <Album {..._props} addToCart={ props.addToCart } /> }
        />
        <Route component={ NotFound } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
