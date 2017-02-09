import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Item = (props) => {
  const { className, children, ...otherProps } = props;
  const classes = classNames('mdl-menu__item', className);

  return (
    <li className={classes} {...otherProps}>
      {children}
    </li>
  )
}

Item.propTypes = {
  className: PropTypes.string
}

export { Item }
