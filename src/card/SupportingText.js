import React, { PropTypes } from 'react';
import classNames from 'classnames';

const SupportingText = (props) => {
  const { className, children, ...otherProps } = props;

  const classes = classNames('mdl-card__supporting-text', className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

SupportingText.propTypes = {
  className: PropTypes.string
}

export { SupportingText }
