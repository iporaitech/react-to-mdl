import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Card = (props) => {
  const { className, border, shadow, children, ...otherProps } = props;

  const classes = classNames('mdl-card', {
    'mdl-card--border': border,
    [`mdl-shadow--${shadow}`]: shadow
  }, className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  border: PropTypes.bool,
  shadow: PropTypes.oneOf([
    '2dp', '3dp', '4dp', '6dp', '8dp', '16dp'
  ])
}

export default Card;
