import React from 'react';
import moment from 'moment';

const year = moment().year();

const Footer = props => (
  <footer>
    <hr />
    <p className="muted">
      © SMS<em>pay</em> EksempelShop { year }. &nbsp;
      <a className="muted" href="">Hjelp</a> &nbsp;
      <a className="muted" href="">Betingelser</a> &nbsp;
      <a className="muted" href="">Personvern</a> &nbsp;
      <a className="muted" href="">Om</a>
    </p>
  </footer>
);

export default Footer;
