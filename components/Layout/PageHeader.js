import React, { PropTypes } from 'react';
import Link from '../Link';
import cx from 'classnames';
import s from './PageHeader.scss';

const PageHeader = () => {
  const title = 'Monitorizare Vot Admin';

  return (
    <div className={cx('mdl-layout mdl-js-layout', + s.main)}>
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{title}</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="/">Sesizari</Link>
            <Link className="mdl-navigation__link" to="/reports">Statistici</Link>
            <Link className="mdl-navigation__link" to="/settings">Setari cont</Link>
            <Link className="mdl-navigation__link" to="/logout">Logout</Link>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">{title}</span>
        <nav className="mdl-navigation">
          <Link className="mdl-navigation__link" to="/">Sesizari</Link>
          <Link className="mdl-navigation__link" to="/reports">Statistici</Link>
          <Link className="mdl-navigation__link" to="/settings">Setari cont</Link>
          <Link className="mdl-navigation__link" to="/logout">Logout</Link>
        </nav>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
};

export default PageHeader;
