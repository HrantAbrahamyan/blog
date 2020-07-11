import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const FlexInput = ({ variant, color, ...restProps }) => (
  <Button variant={variant} color={color} {...restProps} />
);

FlexInput.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

FlexInput.defaultProps = {
  variant: 'contained',
  color: 'primary',
};

export default FlexInput;
