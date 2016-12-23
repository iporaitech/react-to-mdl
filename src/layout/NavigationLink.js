// file: src/layout/NavigationLink.js

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class NavigationLink extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
    tag: PropTypes.oneOf(['a'])
  }

  static defaultProps = {
    tag: 'a'
  }

  render() {
    const { className, id, tag, href, ...otherProps } = this.props;

    const classes = classNames(className);

    return (
      <div className={classes}>
        {React.createElement(
          tag, Object.assign({}, otherProps, {
            id: id,
            href: href,
            className: 'mdl-navigation__link'
          })
        )}
      </div>
    )
  }
}
