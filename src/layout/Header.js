import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Header = (props) => {
  const { className, scroll, waterfall, waterfallHideTop, transparent,
    seamed, children } = props;

  const classes = classNames('mdl-layout__header', {
    'mdl-layout__header--scroll': scroll,
    'mdl-layout__header--waterfall': waterfall,
    'mdl-layout__header--waterfall-hide-top': waterfallHideTop,
    'mdl-layout__header--transparent': transparent,
    'mdl-layout__header--seamed': seamed,
  }, className);

  return (
    <header className={classes}>
      {children}
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  scroll: PropTypes.bool,
  waterfall: PropTypes.bool,
  waterfallHideTop: PropTypes.bool,
  transparent: PropTypes.bool,
  seamed: PropTypes.bool
}

Header.defaultProps = {
  scroll: false,
  waterfall: false,
  waterfallHideTop: false,
  transparent: false,
  seamed: false
}

export { Header }
