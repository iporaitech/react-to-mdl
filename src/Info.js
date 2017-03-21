/**
 * Renders a MDL **info** component.
 *
 * NOTICE: the only **info** in MDL is mdl-list__item-secondary-info
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  type: PropTypes.string
}

const defaultProps = {
  type: 'span'
}

/** Component **/
const Info = (props) => {
  const {
    type,
    className,
    children,

    // "Kind of info"
    listItemSecondary,

    // other props
    ...otherProps
  } = props;
  const classes = classNames({
    'mdl-list__item-secondary-info': listItemSecondary
  }, className)
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(type, _props, children);
}

/** exports **/
Info.propTypes = propTypes;
Info.defaultProps = defaultProps;
export default Info;
