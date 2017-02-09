import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Icon = (props) => {
  const { className, children } = props;
  const classes = classNames('mdl-layout-icon', className);

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Icon.propTypes = {
  className: PropTypes.string
}

export { Icon }
