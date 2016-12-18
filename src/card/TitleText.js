// file: shared/card/TitleText.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class TitleText extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
  }

  render() {
    const { className, tag, children, ...otherProps } = this.props;

    const classes = classNames('mdl-card__title-text', className);
    const props = Object.assign({}, ...otherProps, {className: classes});

    return React.createElement(tag, props, children);
  }
}
