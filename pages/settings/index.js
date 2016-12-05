import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import s from './styles.css';

class MarketPage extends React.Component {

  static propTypes = {
    markets: PropTypes.array,
  };

  render() {
    return (
      <Layout className={s.content}>
        <Panel>Setari</Panel>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps
)(MarketPage);
