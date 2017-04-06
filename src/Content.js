/**
 * Renders a MDL **content** component.
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** Props **/
const propTypes = {
  tag: PropTypes.string
};
const defaultProps = {
  tag: 'div'
};

/** Component **/
const Content = (props) => {
  const {
    tag,
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

  return React.createElement(tag, _props, children)
}


/** exports **/
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
export default Content;
