import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
}

const defaultProps = {
  tag: 'a'
}

const NavigationLink = (props) => {
  const {
    tag,
    className,
    children,
    ...otherProps
  } = props;
  const classes = classNames('mdl-navigation__link', className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(tag, _props, children);
}

NavigationLink.propTypes = propTypes;
NavigationLink.defaultProps = defaultProps;
export { NavigationLink }
