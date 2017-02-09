import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Actions = (props) => {
  const { className, border, children, ...otherProps } = props;

  const classes = classNames('mdl-card__actions', {
    'mdl-card--border': border
  }, className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

Actions.propTypes = {
  className: PropTypes.string,
  border: PropTypes.bool
}

export { Actions }
