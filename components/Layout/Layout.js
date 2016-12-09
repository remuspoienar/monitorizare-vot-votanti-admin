import React, { PropTypes } from 'react';
import PageHeader from './PageHeader';
import cx from 'classnames';
import s from './Layout.scss';
import store from '../../redux/reducers';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const authenticated =  store.getState().auth.authenticated;

    return (
      <div className="mdl-layout mdl-js-layout">
        <div className="mdl-layout__inner-container">
          <PageHeader authenticated={authenticated} />
          <main className={s.main}>
            <div {...this.props} className={cx(s.content, this.props.className)} />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
