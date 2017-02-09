import React, { PropTypes } from 'react';
import classNames from 'classnames';

const DataTable = (props) => {
  const { className, selectable, shadow, children, ...otherProps } = props;
  const classes = classNames('mdl-data-table mdl-js-data-table', {
    'mdl-data-table--selectable': selectable,
    [`mdl-shadow--${shadow}`]: shadow
  }, className);

  return (
    <table className={classes} {...otherProps}>
        {children}
    </table>
  )
}

DataTable.propTypes = {
  className: PropTypes.string,
  selectable: PropTypes.bool,
  shadow: PropTypes.oneOf([
    '2dp', '3dp', '4dp', '6dp', '8dp', '16dp'
  ])
}

DataTable.defaultProps = {
  selectable: false
}

export default DataTable;
