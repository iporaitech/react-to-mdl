import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Panel = (props) => {
  const { className, id, isActive, children, ...otherProps } = props;

  const classes = classNames('mdl-tabs__panel', {
    'is-active': isActive
  }, className);
  return (
    <div className={classes} id={id}>
      {children}
    </div>
  )
}

Panel.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool
}

Panel.defaultProps = {
  isActive: false
}

export { Panel }
