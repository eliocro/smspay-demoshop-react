
import React from 'react';

import { toBase36, getSlug, formatPrice } from '../helpers';


const AlbumItem = props => (
  <li>
    <a href={ `/product/${ toBase36(props.album.id) }/${ getSlug(props.album.name) }` }>
      <img src={ props.album.cover } />
      <div className="info">
        <div className="title">{ props.album.name }</div>
        <div className="artist">{ props.album.artist } ({ props.album.year })</div>
        <div className="price">{ formatPrice(props.album.price) } NOK</div>
      </div>
    </a>
  </li>
);

export default AlbumItem;
