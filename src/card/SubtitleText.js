// file: shared/card/SubtitleText.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class SubtitleText extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    tag: PropTypes.string
  }

  render() {
    const { className, tag, children, ...otherProps } = this.props;

    const classes = classNames('mdl-card__subtitle-text', className);
    const props = Object.assign({}, ...otherProps, {className: classes});

    return React.createElement(tag, props, children);
  }
}
