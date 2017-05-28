import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';


import ProductModel from '../models/Product';
import ColorsInput from './ColorsInput';
import { changeProductForm, addProduct } from '../actions';

class ProductsForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.dispatch(addProduct(this.props.product));
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        <Input
          maxLength="8"
          label="Product Name"
          onChange={name => this.props.dispatch(changeProductForm({
            name,
          }))}
          type="text"
          value={this.props.product.name}
        />
        <ColorsInput
          color={this.props.product.color}
          onChange={color => this.props.dispatch(changeProductForm({
            color,
          }))}
        />
        <Button
          flat
          label="add new product"
          onClick={() => this.onSubmit()}
          primary
        />
      </form>
    );
  }
}

ProductsForm.propTypes = Object.freeze({
  dispatch: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.oneOf(ProductModel.AVAILABLE_COLORS).isRequired,
  }),
});

export default connect(state => ({
  product: state.productFormReducer.product,
}))(ProductsForm);
