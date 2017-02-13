/**
 * React components to render MDL card components
 * See: https://github.com/google/material-design-lite/tree/v1.2.1/src/button
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const { tag, className, raised, fab, miniFab, icon, colored,
    primary, accent, rippleEffect, children, ...otherProps } = props;

  const classes = classNames('mdl-button mdl-js-button', {
    'mdl-button--raised': raised,
    'mdl-button--fab': fab,
    'mdl-button--mini-fab': miniFab,
    'mdl-button--icon': icon,
    'mdl-button--colored': colored,
    'mdl-button--primary': primary,
    'mdl-button--accent': accent,
    'mdl-js-ripple-effect': rippleEffect
  }, className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(tag, _props, children);
}

Button.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  raised: PropTypes.bool,
  fab: PropTypes.bool,
  miniFab: PropTypes.bool,
  icon: PropTypes.bool,
  colored: PropTypes.bool,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  rippleEffect: PropTypes.bool
}

Button.defaultProps = {
  tag: 'button',
  type: 'submit',
  raised: false,
  fab: false,
  miniFab: false,
  icon: false,
  colored: false,
  primary: false,
  accent: false,
  rippleEffect: true
}

export default Button;
