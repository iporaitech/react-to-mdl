import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Drawer = (props) => {
  const { className, children } = props;
  const classes = classNames('mdl-layout__drawer', className);

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Drawer.propTypes = {
  className: PropTypes.string
}

export { Drawer }
