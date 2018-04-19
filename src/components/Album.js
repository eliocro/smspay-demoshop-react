
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { products } from '../data';
import { fromBase36, getSlug, formatPrice } from '../helpers';


class Album extends Component {
  inputRef = React.createRef();

  componentWillMount () {
    const id = fromBase36(this.props.match.params.productId);
    this.product = products.filter(p => p.id === id)[0];
    // console.log('Showing:', p && p.name);
  }

  addToCart = () => {
    // console.log('Adding to cart:', this.product.name);
    const qty = parseInt(this.inputRef.current.value, 10);
    if(!qty) {
      return;
    }

    // Add product to cart
    this.props.addToCart(this.product.id, qty);
    alert('Added to cart');

    // Go back to frontpage
    this.props.history.push('/');
  };

  render () {
    const p = this.product;
    if(!p) {
      return (
        <section className="container">
          <h2>Album not found!</h2>
        </section>
      );
    }

    return (
      <section className="container">
        <div className="item">
          <img src={ p.cover } alt={ getSlug(p.name) } />

          <div className="info">
            <div className="title">{ p.name }</div>
            <div className="artist">{ p.artist } ({ p.year })</div>
            <div className="description">{ p.desc }</div>
            <div className="price">{ formatPrice(p.price) } NOK</div>

            <p>
              Qty: <input type="number" name="qty" ref={ this.inputRef } defaultValue={ 1 } />
              <br />
              <button className="btn btn-primary btn-large" onClick={ this.addToCart }>Add to cart</button>
            </p>
          </div>
        </div>

        <div className="clearfix"></div>
        <Link to="/">See all products</Link>
      </section>
    );
  }
}

export default Album;
