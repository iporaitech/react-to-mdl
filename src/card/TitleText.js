import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TitleText = (props) => {
  const { className, tag, children, ...otherProps } = props;

  const classes = classNames('mdl-card__title-text', className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(tag, _props, children);
}

TitleText.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

export { TitleText }
