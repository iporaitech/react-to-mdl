import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Tab = (props) => {
  const { className, href, isActive, children, ...otherProps } = props;

  const classes = classNames('mdl-tabs__tab', {
    'is-active': isActive
  }, className);

  return (
    <a href={href} className={classes} {...otherProps}>
      {children}
    </a>
  )
}

Tab.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool
}

Tab.defaultProps = {
  isActive: false
}

export { Tab }
