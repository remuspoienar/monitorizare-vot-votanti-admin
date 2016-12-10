import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import history from '../../core/history';
import store from '../../redux/reducers';
import Link from '../../components/Link';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import s from './styles.css';

import { logout } from '../../redux/actions/authActions';

class LoginPage extends React.Component {

  static propTypes = {
    authenticated: PropTypes.bool,
  };

  componentWillMount() {
    if (this.props.authenticated) {
      store.dispatch(logout());
    }
  }

  render() {
    return (
      <Layout className={s.content}>
        <Panel>
          <h3 className={s.title}>Sesiune terminata.</h3>
          <Link className="mdl-navigation__link" to="/login">Click aici pentru login</Link>
        </Panel>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(
  mapStateToProps
)(LoginPage);
