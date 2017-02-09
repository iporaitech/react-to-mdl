import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Navigation = (props) => {
  const { className, children, ...otherProps } = props;
  const classes = classNames('mdl-navigation', className);

  return (
    <nav className={classes} {...otherProps}>
      {children}
    </nav>
  )
}

Navigation.propTypes = {
  className: PropTypes.string
}

export { Navigation }
