import React, { PropTypes } from 'react';
import classNames from 'classnames';

const List = (props) => {
  const { tag, className, children, ...otherProps } = props;
  const classes = classNames('mdl-list', className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(tag, _props, children)
}

List.propTypes = {
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
}

List.defaultProps = {
  tag: 'ul'
}

export default List;
