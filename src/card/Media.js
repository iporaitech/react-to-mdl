import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Media = (props) => {
  const { className, children, ...otherProps } = props;

  const classes = classNames('mdl-card__media', className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

Media.propTypes = {
  className: PropTypes.string
}

export { Media }
