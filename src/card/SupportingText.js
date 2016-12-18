// file: shared/card/SupportingText.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class SupportingText extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children, ...otherProps } = this.props;
    
    const classes = classNames('mdl-card__supporting-text', className);

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    );
  }
}
