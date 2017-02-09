import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TD = (props) => {
  const { className, nonNumeric, children, ...otherProps } = props;
  const classes = classNames({
    'mdl-data-table__cell--non-numeric': nonNumeric
  }, className);

  return (
    <td className={classes} {...otherProps}>
        {children}
    </td>
  )
}

TD.propTypes = {
  className: PropTypes.string,
  nonNumeric: PropTypes.bool
}

TD.defaultProps = {
  nonNumeric: false
}

export { TD };
