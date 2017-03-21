/**
 * Renders a MDL **icon** component.
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  type: PropTypes.string
}

const defaultProps = {
  type: 'i'
}

/** Component **/
const Icon = (props) => {
  const {
    type,
    className,
    children,

    // "kind of icons"
    listItem,
    listItemAvatar,

    // other props
    ...otherProps
  } = props;
  const classes = classNames('material-icons', {
    // The following props represent MDL "contexts"
    'mdl-list__item-icon': listItem,
    'mdl-list__item-avatar': listItemAvatar
  }, className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(type, _props, children)
}

/** exports **/
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
export default Icon;
