import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TabBar = (props) => {
  const { children } = props;

  const classes = classNames('mdl-tabs__tab-bar');

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export { TabBar }
