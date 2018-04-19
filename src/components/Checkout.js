
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import { formatPrice } from '../helpers';
import { shipping as shipOptions } from '../data';

const merchantName = 'EksempelShop';
const merchantId = 8397064334568568;


class Checkout extends Component {
  inputRef = React.createRef();

  state = {
    shipping: 0
  };

  componentWillMount () {
    this.setState({ shipping: shipOptions[0].price });
  }

  placeOrder = ev => {
    ev.preventDefault();

    let phone = this.inputRef.current.value;
    if(phone.length < 10) {
      phone = '47' + phone;
    }

    const ref = Math.floor(Math.random() * 9000) + 1000;
    const order = {
      phone: phone,
      invoice: ref.toString(),
      description: 'Order #' + ref + ' from ' + merchantName,
      currency: 'NOK',
      shipping: this.state.shipping,
      merchant: merchantId,
    };

    const { cart } = this.props;
    let i = 1;
    for(const k in cart) {
      const item = cart[k];
      order['item_number_' + i] = ref * 1000 + item.id;
      order['item_name_' + i] = item.name;
      order['amount_' + i] = item.price;
      order['quantity_' + i] = item.qty;
      i++;
    }

    console.log('Order:', order);
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

    const options = shipOptions.map((s, i) => (
      <option value={ s.price } key={ i }>{ s.location }</option>
    ));

    const { shipping } = this.state;
    const final = total + shipping;

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
                  { options }
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
            <input
              type="text"
              ref={ this.inputRef }
              placeholder="Your phone number"
              pattern="[0-9]{8,12}"
              required
            />
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
