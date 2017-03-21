/**
 * Renders a MDL **text** component.
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
const Text = (props) => {
  const {
    type,
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

  return React.createElement(type, _props, children)
}

/** exports **/
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default Text;
