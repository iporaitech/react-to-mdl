import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Title = (props) => {
  const { className, children, ...otherProps } = props;

  const classes = classNames('mdl-card__title', className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

Title.propTypes = {
  className: PropTypes.string
}

export { Title }
