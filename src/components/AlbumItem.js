
import React, { Component } from 'react';

import { toBase36, getSlug, formatPrice } from '../helpers';


class AlbumItem extends Component {
  link = `/product/${ toBase36(this.props.album.id) }/${ getSlug(this.props.album.name) }`;

  showAlbum = ev => {
    ev.preventDefault();
    // console.log('Going to', this.link);
    this.props.history.push(this.link);
  }

  render () {
    const { name, cover, artist, year, price } = this.props.album;
    return (
      <li>
        <a href={ this.link } onClick={ this.showAlbum }>
          <img src={ cover } alt={ getSlug(name) } />
          <div className="info">
            <div className="title">{ name }</div>
            <div className="artist">{ artist } ({ year })</div>
            <div className="price">{ formatPrice(price) } NOK</div>
          </div>
        </a>
      </li>
    );
  }
}

export default AlbumItem;
