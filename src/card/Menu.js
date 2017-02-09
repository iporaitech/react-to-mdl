import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Menu = (props) => {
  const { className, children, ...otherProps } = props;

  const classes = classNames('mdl-card__menu', className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

Menu.propTypes = {
  className: PropTypes.string
}

export { Menu }
