// file: shared/card/Card.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Card extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    border: PropTypes.bool,
    shadow: PropTypes.oneOf([
      '2dp', '3dp', '4dp', '6dp', '8dp', '16dp'
    ])
  }

  render() {
    const { className, border, shadow, children, ...otherProps } = this.props;

    const classes = classNames('mdl-card', {
      'mdl-card--border': border,
      [`mdl-shadow--${shadow}`]: shadow
    }, className);

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    );
  }
}
