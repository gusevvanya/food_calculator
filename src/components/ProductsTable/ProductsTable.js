import React, { Component } from 'react';

import { dishes, products } from '../../food_data';
import Row from './Row/Row';

class ProductsTable extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        table
        <Row />
      </div>
    );
  }
}

export default ProductsTable;
