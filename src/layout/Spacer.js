import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Spacer = (props) => {
  const { className } = props;
  const classes = classNames('mdl-layout-spacer', className);

  return <div className={classes}></div>
}

Spacer.propTypes = {
  className: PropTypes.string
}

export { Spacer }
