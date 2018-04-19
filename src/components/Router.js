
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StoreFront from './StoreFront';
import Album from './Album';
import NotFound from './NotFound';


const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ StoreFront } />
      <Route path="/product/:productId/:productName"
        component={ _props => <Album {..._props} addToCart={ props.addToCart } /> }
      />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
);

export default Router;
