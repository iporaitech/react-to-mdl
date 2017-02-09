import React, { PropTypes } from 'react';
import classNames from 'classnames';

const HeaderRow = (props) => {
  const { className, children } = props;
  const classes = classNames('mdl-layout__header-row', className);

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

HeaderRow.propTypes = {
  className: PropTypes.string
}

export { HeaderRow }
