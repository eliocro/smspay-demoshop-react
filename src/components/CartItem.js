
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { formatPrice, toBase36, getSlug } from '../helpers';


class CartItem extends Component {
  inputRef = React.createRef();

  remove = ev => {
    ev.preventDefault();
    this.props.remove(this.props.item.id);
  }

  update = ev => {
    const qty = parseInt(this.inputRef.current.value, 10);
    if(!qty || qty < 0) {
      return;
    }
    this.props.update(this.props.item.id, qty);
  }

  render () {
    const p = this.props.item;
    const link = `/product/${ toBase36(p.id) }/${ getSlug(p.name) }`;

    return (
      <tr>
        <td>{ this.props.index + 1 }</td>
        <td>
          <Link to={ link }>{ p.name }</Link>
        </td>
        <td>{ p.artist }</td>
        <td>{ formatPrice(p.price) } NOK</td>
        <td>
          <input
            type="number"
            defaultValue={ p.qty }
            ref={ this.inputRef }
            onBlur={ this.update }
            min="1"
          />
        </td>
        <td>
          <a href="" onClick={ this.remove }>Remove</a>
        </td>
      </tr>
    );
  }
}

export default CartItem;
