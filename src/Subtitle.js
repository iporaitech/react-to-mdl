/**
 * Renders a MDL **sub-title** component.
 *
 * NOTICE: the only **sub-title** in MDL is mdl-list__item-sub-title
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
const Subtitle = (props) => {
  const {
    type,
    className,
    children,

    // "Kind of subtitles"
    listItem,

    // other props
    ...otherProps
  } = props;
  const classes = classNames({
    'mdl-list__item-sub-title': listItem
  }, className)
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(type, _props, children);
}

/** exports **/
Subtitle.propTypes = propTypes;
Subtitle.defaultProps = defaultProps;
export default Subtitle;
