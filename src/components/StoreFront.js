
import React, { Component } from 'react';

import AlbumItem from './AlbumItem';
import { products } from '../data';


class StoreFront extends Component {
  render () {
    return (
      <section className="container">
        <h2>The best albums</h2>
        <h4>Buy them here!</h4>

        <ul className="products">
          { products.map(p => (
            <AlbumItem album={ p } key={ p.id } history={ this.props.history } />
          )) }
        </ul>
      </section>
    );
  }
}

export default StoreFront;
