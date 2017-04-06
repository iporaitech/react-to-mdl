/**
 * Renders a MDL **text** component.
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
const Text = (props) => {
  const {
    tag,
    className,
    children,

    // "kind of icons"
    listItemBody,

    // other props
    ...otherProps
  } = props;
  const classes = classNames({
    'mdl-list__item-text-body': listItemBody
  }, className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(tag, _props, children)
}

/** exports **/
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default Text;
