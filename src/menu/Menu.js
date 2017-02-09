import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Menu = (props) => {
  const { className, bottomRight, children, ...otherProps } = props;
  const classes = classNames('mdl-menu mdl-js-menu', {
    'mdl-menu--bottom-right': bottomRight
  }, className);

  return (
    <ul className={classes} {...otherProps}>
      {children}
    </ul>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  bottomRight: PropTypes.bool
}

Menu.defaultProps = {
  bottomRight: false
}

export default Menu;
