import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import history from '../../core/history';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import s from './styles.css';

import { login } from '../../redux/actions/authActions';

class LoginPage extends React.Component {

  static propTypes = {
    authenticated: PropTypes.bool,
  };

  componentWillMount() {
    if (this.props.authenticated) {
      history.push({ pathname: '/' });
    }
  }

  onLogin = () => {
    store.dispatch(login({ email: '', password: '' }));
  }

  render() {
    return (
      <Layout className={s.content}>
        <Panel>
          <h3 className={s.title}>Login</h3>
          <div className={s.form}>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="email" id="email" />
              <label className="mdl-textfield__label" htmlFor="email">Email</label>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="password" id="password" />
              <label className="mdl-textfield__label" htmlFor="password">Parola</label>
            </div>
            <br/>
            <button onClick={this.onLogin} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Login
            </button>
          </div>
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
