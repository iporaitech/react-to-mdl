import React, { PropTypes } from 'react';
import classNames from 'classnames';

/** props **/
const propTypes = {
  type: PropTypes.string
}
const defaultProps = {
  type: 'li'
}

/** Component **/
const ListItem = (props) => {
  const {
    type,
    className,
    children,

    // "Kinds of ListItem"
    // TODO: find if there are any other **item** in MDL and unnest this.
    twoLine,
    threeLine,

    // other props
    ...otherProps
  } = props;
  const classes = classNames('mdl-list__item', {
    'mdl-list__item--two-line': twoLine,
    'mdl-list__item--three-line': threeLine
  }, className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(type, _props, children);
}

/** exports **/
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
export { ListItem };