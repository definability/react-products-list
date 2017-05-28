import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Layout, Panel } from 'react-toolbox';

import ProductModel from '../models/Product';
import ProductsForm from './ProductsForm';
import ProductsTable from './ProductsTable';
import { changeProductForm, addProduct } from '../actions';

const Application = props => (
  <Layout>
    <Panel>
      <h1>Bucket</h1>

      <h2>Add products</h2>
      <ProductsForm
        product={props.product}
        onSubmit={() => props.dispatch(addProduct(props.product))}
        onChange={product => props.dispatch(changeProductForm(product))}
      />

      <h2>Products</h2>
      <ProductsTable products={props.products} />
    </Panel>
  </Layout>
);

const productPropType = Object.freeze(PropTypes.shape({
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(ProductModel.AVAILABLE_COLORS).isRequired,
}));

Application.propTypes = Object.freeze({
  dispatch: PropTypes.func.isRequired,
  product: productPropType.isRequired,
  products: PropTypes.arrayOf(productPropType).isRequired,
});

export default connect(state => ({
  product: state.productFormReducer.product,
  products: state.productsReducer.products,
}))(Application);
