// file: shared/card/Title.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Title extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children, ...otherProps } = this.props;

    const classes = classNames('mdl-card__title', className);

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    );
  }
}
