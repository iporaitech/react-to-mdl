/**
 * Renders a MDL **icon** component.
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  tag: PropTypes.string
}

const defaultProps = {
  tag: 'i'
}

/** Component **/
const Icon = (props) => {
  const {
    tag,
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

  return React.createElement(tag, _props, children)
}

/** exports **/
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
export default Icon;
