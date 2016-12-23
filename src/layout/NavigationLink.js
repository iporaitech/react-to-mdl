// file: src/layout/NavigationLink.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export class NavigationLink extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string
  }

  render() {
    const { className, to, href, ...otherProps } = this.props;
    const classes = classNames('mdl-navigation__link', className);

    const tag = to ? Link : 'a';

    let baseProps =  Object.assign( (to ? { to } : { href }), {className: classes});

    return (
      React.createElement(
        tag, Object.assign({}, otherProps, baseProps)
      )
    );
  }
}
