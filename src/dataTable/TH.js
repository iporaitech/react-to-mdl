import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TH = (props) => {
  const { className, ascending, descending, nonNumeric, children,
    ...otherProps } = props;
  const classes = classNames({
    'mdl-data-table__header--sorted-ascending': ascending,
    'mdl-data-table__header--sorted-descending': descending,
    'mdl-data-table__cell--non-numeric': nonNumeric
  }, className);

  return (
    <th className={classes} {...otherProps}>
        {children}
    </th>
  )
}

TH.propTypes = {
  className: PropTypes.string,
  ascending: PropTypes.bool,
  descending: PropTypes.bool,
  nonNumeric: PropTypes.bool
}

TH.defaultProps = {
  ascending: false,
  descending: false,
  nonNumeric: false
}

export { TH }
