import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Layout = (props) => {
  const { className, fixedDrawer, fixedHeader,
    fixedTabs, children, ...otherProps } = props;

  const classes = classNames('mdl-js-layout mdl-layout', {
    'mdl-layout--fixed-drawer': fixedDrawer,
    'mdl-layout--fixed-header': fixedHeader,
    'mdl-layout--fixed-tabs': fixedTabs
  }, className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  className: PropTypes.string,
  fixedDrawer: PropTypes.bool,
  fixedHeader: PropTypes.bool,
  fixedTabs: PropTypes.bool
}

export default Layout;
