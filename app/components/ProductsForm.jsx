import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import ProductModel from '../models/Product';
import ColorsInput from './ColorsInput';

const ProductsForm = props => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit();
    }}
  >
    <Input
      maxLength="8"
      label="Product Name"
      onChange={name => props.onChange({
        name,
      })}
      type="text"
      value={props.product.name}
    />
    <ColorsInput
      color={props.product.color}
      onChange={color => props.onChange({
        color,
      })}
    />
    <Button
      flat
      label="add new product"
      onClick={() => props.onSubmit()}
      primary
    />
  </form>
);

ProductsForm.propTypes = Object.freeze({
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.oneOf(ProductModel.AVAILABLE_COLORS).isRequired,
  }),
});

export default ProductsForm;
