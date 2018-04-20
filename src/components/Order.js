
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as SMSpay from '../smspay';
import { fromBase36, formatPrice, formatDate } from '../helpers';


class Order extends Component {
  state = {
    order: null,
    error: null,
  };

  getData = () => {
    const { auth } = this.props;
    if(!auth) {
      return;
    }

    const { orderId } = this.props.match.params;
    if(this.orderId === orderId) {
      return;
    }
    this.orderId = orderId;

    // Retrieve order
    SMSpay.getOrder(fromBase36(orderId), auth)
    .then(order => {
      console.log('Order:', order);
      this.mounted && this.setState({ order, error: null });
    })
    .catch(error => {
      console.log(error);
      this.mounted && this.setState({ order: null, error });
    });
  }

  componentDidMount () {
    this.mounted = true;
    this.getData();
  }

  componentDidUpdate () {
    this.getData();
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  render () {
    const { auth } = this.props;
    if(!auth) {
      return (
        <section className="container">
          <h1 className="center">Order</h1>
          <p>You need to login before viewing an order</p>
        </section>
      );
    }

    const { order, error } = this.state;
    if(error) {
      return (
        <section className="container">
          <h1 className="center">Error</h1>
          <p>{ error.statusCode } { error.error } - { error.message }</p>
        </section>
      );
    }

    if(!order || !order.reference) {
      return (
        <section className="container">
          <h1 className="center">Order</h1>
          <p>Loading...</p>
        </section>
      );
    }

    const isNew = this.props.match.params.isNew !== '0';
    const getStatus = () => {
      switch(order.status) {
        case 'ACTIVE': return <span className="alert alert-warn">Processing</span>;
        case 'PENDING': return <span className="alert alert-error">Waiting your confirmation</span>;
        case 'PROCESSING': return <span className="alert alert-warn">Processing payment</span>;
        case 'COMPLETED': return <span className="alert alert-info">Completed</span>;
        case 'CANCELLED': return <span className="alert alert-error">Cancelled</span>;
        default: return '';
      }
    }

    return (
      <section className="container">
        <div className="row">
          <div className="span8 offset2">
            { isNew ? <h3>Thank you for your order</h3> : <h3>Order details</h3> }
            <p>
              <span className="item-strong">SMSPay #:</span>
              <span>
                <strong>{ order.reference }</strong>
                { isNew ? <span> (Use this id to check back on your order)</span> : '' }
              </span>
            </p>
            <h4>Order info</h4>
            <p>
              <span className="item-strong">Description:</span>
              <span>{ order.description }</span>
            </p>
            <p>
              <span className="item-strong">Invoice:</span>
              <span>{ order.invoice }</span>
            </p>
            <p>
              <span className="item-strong">Date:</span>
              <span>{ formatDate(order.meta.created_at) }</span>
            </p>
            <p>
              <span className="item-strong">Status:</span>
              <span>{ getStatus() }</span>
            </p>
            <hr/>
            <p>
              <span className="item-strong">Total Amount:</span>
              <span><strong>{ formatPrice(order.amount) } { order.currency }</strong></span>
            </p>
            <br/>
            <h4>Order Items</h4>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Quantity</th>
                  <th>Shipping</th>
                </tr>
              </thead>
              <tbody>
                { order._items.map(item => (
                  <tr key={ item.number }>
                    <td>{ item.number }</td>
                    <td>{ item.name }</td>
                    <td>{ formatPrice(item.amount) } { order.currency }</td>
                    <td>{ item.quantity }</td>
                    <td>{ item.shipping ? (
                      <span>{ formatPrice(item.shipping) } { order.currency }</span>
                    ) : '' }</td>
                  </tr>
                )) }
                { order.shipping ? (
                  <tr>
                    <td></td>
                    <td>Shipping</td>
                    <td>{ formatPrice(order.shipping) } { order.currency }</td>
                    <td>1</td>
                    <td></td>
                  </tr>
                ) : '' }
              </tbody>
            </table>
          </div>
        </div>

        <Link to="/">Go to shop home</Link>
      </section>
    );
  }
}

export default Order;
