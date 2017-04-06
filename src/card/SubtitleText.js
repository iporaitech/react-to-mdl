import React, { PropTypes } from 'react';
import classNames from 'classnames';

const SubtitleText = (props) => {
  const { className, tag, children, ...otherProps } = props;

  const classes = classNames('mdl-card__subtitle-text', className);
  const _props = Object.assign({}, otherProps, {className: classes});

  return React.createElement(tag, _props, children);
}

SubtitleText.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
}

export { SubtitleText }
