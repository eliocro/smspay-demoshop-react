
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import { formatPrice } from '../helpers';


class Cart extends Component {
  render () {
    const { cart } = this.props;
    if(!cart) {
      return null;
    }

    const count = Object.keys(cart).reduce((a,k) => a + cart[k].qty, 0);
    const total = Object.keys(cart).reduce((a,k) => a + cart[k].price * cart[k].qty, 0);

    return (
      <section className="container">
        <h1 className="center">Shopping cart</h1>
        <hr />
        <table className="table table-striped table-hover cart">
          <thead>
            <tr>
              <th>#</th>
              <th>Album</th>
              <th>Artist</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { Object.keys(cart).map((k, i) => {
              return (
                <CartItem item={ cart[k] } index={ i } key={ k }
                  remove={ this.props.removeFromCart }
                  update={ this.props.updateCartItem }
                />
              );
            }) }
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Sub-total</th>
              <th></th>
              <th>{ formatPrice(total) } NOK</th>
              <th className="center">{ count }</th>
              <th></th>
            </tr>
          </tfoot>
        </table>

        <p align="center" ng-show="count">
          <Link to="/checkout" className="btn btn-primary btn-large">Checkout</Link>
        </p>
        <br/>
        <p>
          <Link to="/">Continue Shopping</Link>
        </p>
      </section>
    );
  }
}

export default Cart;
