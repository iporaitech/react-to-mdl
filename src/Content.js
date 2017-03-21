/**
 * Renders a MDL **content** component.
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  type: PropTypes.string
};
const defaultProps = {
  type: 'div'
};

/** Component **/
const Content = (props) => {
  const {
    type,
    className,
    children,

    // "kind of content"
    layout,
    listItemPrimary,
    listItemSecondary,

    // other props
    ...otherProps
  } = props;
  const classes = classNames({
    'mdl-layout__content': layout,
    'mdl-list__item-primary-content': listItemPrimary,
    'mdl-list__item-secondary-content': listItemSecondary
  }, className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(type, _props, children)
}


/** exports **/
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
export default Content;
