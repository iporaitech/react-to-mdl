import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Grid = (props) => {
  const { className, noSpacing, children, ...otherProps } = props;

  const classes = classNames('mdl-grid', {
    'mdl-grid--nospacing': noSpacing
  }, className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
  noSpacing: PropTypes.bool
}

export default Grid;
