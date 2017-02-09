import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Tabs = (props) => {
  const { className, rippleEffect, children, ...otherProps } = props;

  const classes = classNames('mdl-tabs mdl-js-tabs', {
    'mdl-js-ripple-effect': rippleEffect
  }, className);

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Tabs.propTypes = {
  className: PropTypes.string,
  rippleEffect: PropTypes.bool
}

Tabs.defaultProps = {
  rippleEffect: false
}

export default Tabs;
