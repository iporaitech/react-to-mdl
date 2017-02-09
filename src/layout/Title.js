import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Title = (props) => {
  const { className, children } = props;
  const classes = classNames('mdl-layout__title', className);

  return (
    <span className={classes}>
      {children}
    </span>
  );
}

Title.propTypes = {
  className: PropTypes.string
}

export { Title }
