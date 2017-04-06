/**
 * Renders a MDL **sub-title** component.
 *
 * NOTICE: the only **sub-title** in MDL is mdl-list__item-sub-title
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  tag: PropTypes.string
}

const defaultProps = {
  tag: 'span'
}

/** Component **/
const Subtitle = (props) => {
  const {
    tag,
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

  return React.createElement(tag, _props, children);
}

/** exports **/
Subtitle.propTypes = propTypes;
Subtitle.defaultProps = defaultProps;
export default Subtitle;
