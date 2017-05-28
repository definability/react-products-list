import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Table, TableHead, TableRow, TableCell } from 'react-toolbox/lib/table';

import ProductModel from '../models/Product';

const ProductsTable = props => (
  <Table selectable={false}>
    <TableHead>
      <TableCell>
        Name
      </TableCell>
      <TableCell>
        Color
      </TableCell>
    </TableHead>
    {props.products.map(product => (
      <TableRow>
        <TableCell>
          {product.name}
        </TableCell>
        <TableCell>
          {product.color.toLowerCase()}
        </TableCell>
      </TableRow>
    ))}
  </Table>
);

ProductsTable.propTypes = Object.freeze({
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.oneOf(ProductModel.AVAILABLE_COLORS).isRequired,
  })).isRequired,
});

export default connect(state => ({
  products: state.productsReducer.products,
}))(ProductsTable);
