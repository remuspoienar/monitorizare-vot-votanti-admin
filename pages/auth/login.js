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

  state = {
    email: '',
    password: ''
  }

  componentWillMount() {
    if (this.props.authenticated) {
      history.push({ pathname: '/' });
    }
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onSubmit = () => {
    const { email, password } = this.state;
    store.dispatch(login({ email: email, password: password }));
  }

  getErrors = () => {
    const { error } = this.props;

    if (error && error.errors) {
      return (
        <ul className={s.errors}>
          { error.errors.map((e) => {
            return <li>{e[0]}</li>
          })}
        </ul>
      )
    }
  }

  render() {
    return (
      <Layout className={s.content}>
        <Panel>
          <h3 className={s.title}>Login</h3>
          <div className={s.form}>

            {this.getErrors()}

            <div className="mdl-textfield mdl-js-textfield">
              <input onChange={this.onEmailChange} className="mdl-textfield__input" type="email" id="email" autoFocus />
              <label className="mdl-textfield__label" htmlFor="email">Email</label>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield">
              <input onChange={this.onPasswordChange} className="mdl-textfield__input" type="password" id="password" />
              <label className="mdl-textfield__label" htmlFor="password">Parola</label>
            </div>
            <br/>
            <button onClick={this.onSubmit} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
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
  error: state.auth.error,
});

export default connect(
  mapStateToProps
)(LoginPage);
