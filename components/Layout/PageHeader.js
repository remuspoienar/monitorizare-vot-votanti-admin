import React, { PropTypes } from 'react';
import Link from '../Link';
import cx from 'classnames';
import s from './PageHeader.scss';

const getLoginMenuNav = () => {
  return (
    <nav className="mdl-navigation">
      <Link className="mdl-navigation__link" to="/login">Login</Link>
      <Link className="mdl-navigation__link" to="/recover">Recuperare parola</Link>
    </nav>
  )
}

const getUserMenuNav = () => {
  return (
    <nav className="mdl-navigation">
      <Link className="mdl-navigation__link" to="/">Sesizari</Link>
      <Link className="mdl-navigation__link" to="/reports">Statistici</Link>
      <Link className="mdl-navigation__link" to="/settings">Setari cont</Link>
      <Link className="mdl-navigation__link" to="/logout">Logout</Link>
    </nav>
  )
}

const PageHeader = ({authenticated}) => {
  const title = 'Monitorizare Vot Admin';
  const nav = authenticated ? getUserMenuNav() : getLoginMenuNav();

  return (
    <div className={cx('mdl-layout mdl-js-layout', + s.main)}>
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
        <Link className="mdl-layout-title" to="/">{title}</Link>
          <div className="mdl-layout-spacer"></div>
          { nav }
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <Link className="mdl-layout-title" to="/">{title}</Link>
        { nav }
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  authenticated: PropTypes.bool
};

export default PageHeader;
