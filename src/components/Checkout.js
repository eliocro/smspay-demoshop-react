
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import { formatPrice } from '../helpers';
import { shipping } from '../data';


class Checkout extends Component {
  state = {
    shipping: 0
  };

  componentWillMount () {
    this.setState({ shipping: shipping[0].price });
  }

  placeOrder = () => {
    const { cart } = this.props;
  }

  setShipping = ev => {
    const amount = parseInt(ev.currentTarget.value, 10);
    if(!amount || amount < 0) {
      return;
    }
    this.setState({ shipping: amount });
  }

  render () {
    const { cart } = this.props;
    if(!cart) {
      return null;
    }

    const count = Object.keys(cart).reduce((a,k) => a + cart[k].qty, 0);
    const total = Object.keys(cart).reduce((a,k) => a + cart[k].price * cart[k].qty, 0);

    const shipOptions = shipping.map((s, i) => (
      <option value={ s.price } key={ i }>{ s.location }</option>
    ));
    const final = total + (this.state.shipping || 0);

    return (
      <section className="container">
        <h1 className="center">Checkout</h1>
        <hr />

        <table className="table table-striped table-bordered checkout">
          <thead>
            <tr>
              <th>#</th>
              <th>Album</th>
              <th>Artist</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { Object.keys(cart).map((k, i) => (
              <CartItem item={ cart[k] } index={ i } key={ k }
                remove={ this.props.removeFromCart }
                update={ this.props.updateCartItem }
                editable={ false }
              />
            )) }
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th colSpan="2">Sub-total</th>
              <th align="center">{ count } items</th>
              <th>{ formatPrice(total) } NOK</th>
            </tr>
            <tr>
              <th></th>
              <th colSpan="3">
                <select onChange={ this.setShipping }>
                  { shipOptions }
                </select>
                <span>Shipping</span>
              </th>
              <th>{ formatPrice(this.state.shipping) } NOK</th>
            </tr>
          </tfoot>
        </table>
        <br/>

        <div className="text-center">
          <form onSubmit={ this.placeOrder }>
            <h4>Your Total: { formatPrice(final) } NOK</h4>
            <br/>

            <input type="text" ng-model="customer.phone"
              placeholder="Your phone number" pattern="[0-9]{8,12}" required />
            <br/><br/>

            <input type="submit" className="btn btn-primary btn-large" value="Place order" />
          </form>
        </div>
        <br/>

        <p>
          <Link to="/cart">Back to shopping cart</Link>
          <br/><br/>
          <Link to="/">Continue shopping</Link>
        </p>
      </section>
    );
  }
}


export default Checkout;
