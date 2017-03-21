/**
 * Renders a MDL **action** component.
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  type: PropTypes.string
};
const defaultProps = {
  type: 'button'
};

/** Component **/
const Action = (props) => {
  const {
    type,
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

  return React.createElement(type, _props, children)
}


/** exports **/
Action.propTypes = propTypes;
Action.defaultProps = defaultProps;
export default Action;
