/**
 * Renders a MDL **action** component.
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};
const defaultProps = {
  tag: 'button'
};

/** Component **/
const Action = (props) => {
  const {
    tag,
    className,
    children,

    // "kind of action"
    chip,
    snackbar,
    listItemSecondary,

    // other props
    ...otherProps
  } = props;
  const classes = classNames({
    'mdl-chip__action': chip,
    'mdl-snackbar__action': snackbar,
    'mdl-list__item-secondary-action': listItemSecondary
  }, className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(tag, _props, children)
}


/** exports **/
Action.propTypes = propTypes;
Action.defaultProps = defaultProps;
export default Action;
