// file: shared/card/Actions.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Actions extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    border: PropTypes.bool
  }

  render() {
    const { className, border, children, ...otherProps } = this.props;

    const classes = classNames('mdl-card__actions', {
      'mdl-card--border': border
    }, className);

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    );
  }
}
