import React, { Component } from 'react';

import ProductsTable from '../ProductsTable/ProductsTable';
import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <ProductsTable className="products-table" />
    );
  }
}

export default App;
