import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Content = (props) => {
  const { className, children } = props;
  const classes = classNames('mdl-layout__content', className);

  return (
    <main className={classes}>
      {children}
    </main>
  )
}

Content.propTypes = {
  className: PropTypes.string
}

export { Content }
