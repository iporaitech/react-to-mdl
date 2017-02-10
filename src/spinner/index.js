/**
 * React component to render MDL spinner component
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/spinner
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Spinner = (props) => {
  const { className, isActive, singleColor, ...otherProps } = props;

  const classes = classNames('mdl-spinner mdl-js-spinner', {
    'is-active': isActive,
    'mdl-spinner--single-color': singleColor
  }, className);

  return <div className={classes} {...otherProps}></div>
}

Spinner.propTypes = {
  isActive: PropTypes.bool,
  singleColor: PropTypes.bool
}

Spinner.defaultProps = {
  isActive: true,
  singleColor: false
}

export default Spinner;
