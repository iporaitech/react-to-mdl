// file: shared/dataTable/TD.js
import React, { PropTypes } from 'react';
import classNames from 'classnames';

export class TD extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    nonNumeric: PropTypes.bool
  }

  static defaultProps = {
    nonNumeric: false
  }

  render() {
    const { className, nonNumeric, children, ...otherProps } = this.props;
    const classes = classNames({
      'mdl-data-table__cell--non-numeric': nonNumeric
    }, className);

    return (
      <td className={classes} {...otherProps}>
          {children}
      </td>
    )
  }
}
