// file: shared/menu/Item.js
import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Item extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children, ...otherProps } = this.props;
    const classes = classNames('mdl-menu__item', className);

    return (
      <li className={classes} {...otherProps}>
        {children}
      </li>
    )
  }
}
