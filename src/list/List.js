import React, { PropTypes } from 'react';
import classNames from 'classnames';

const List = (props) => {
  const { type, className, children, ...otherProps } = props;
  const classes = classNames('mdl-list', className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(type, _props, children)
}

List.propTypes = {
  type: PropTypes.string
}

List.defaultProps = {
  type: 'ul'
}

export default List;
