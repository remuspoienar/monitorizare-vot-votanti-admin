import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import s from './styles.css';

import { login } from '../../redux/actions/authActions';

class LoginPage extends React.Component {

  static propTypes = {
    authorized: PropTypes.bool,
  };

  componentWillMount() {
    if (this.props.authorized) {
      console.log('redirect to incidents')
    }
  }

  render() {
    return (
      <Layout className={s.content}>
        <Panel>
          <h3 className={s.title}>Login</h3>
        </Panel>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.auth.authorized,
});

export default connect(
  mapStateToProps
)(LoginPage);
