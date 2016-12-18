// file: shared/card/Media.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class Media extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children, ...otherProps } = this.props;

    const classes = classNames('mdl-card__media', className);

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    );
  }
}
