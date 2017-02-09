import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

const NavigationLink = (props) => {
  const { className, to, href, ...otherProps } = props;
  const classes = classNames('mdl-navigation__link', className);

  const tag = to ? Link : 'a';

  let baseProps =  Object.assign( (to ? { to } : { href }), {className: classes});

  return (
    React.createElement(
      tag, Object.assign({}, otherProps, baseProps)
    )
  );
}

NavigationLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

export { NavigationLink }
