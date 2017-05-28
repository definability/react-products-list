import React from 'react';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import PropTypes from 'prop-types';

import ProductModel from '../models/Product';

const ColorsInput = props => (
  <RadioGroup name="colors" onChange={props.onChange} value={props.color}>
    {ProductModel.AVAILABLE_COLORS.map(color => (
      <RadioButton label={color.toLowerCase()} value={color} key={`${color}-radio`} />
    ))}
  </RadioGroup>
);

ColorsInput.propTypes = Object.freeze({
  color: PropTypes.oneOf(ProductModel.AVAILABLE_COLORS).isRequired,
  onChange: PropTypes.func.isRequired,
});

export default ColorsInput;
