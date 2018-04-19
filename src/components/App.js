import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import StoreFront from './StoreFront';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
