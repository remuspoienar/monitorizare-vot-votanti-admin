import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import CountiesFilter from '../../components/CountiesFilter'
import s from './styles.css';

import { getCounties } from '../../redux/actions/countiesActions';
import { getAllCounties } from '../../redux/reducers/counties';

class IncidentsPage extends React.Component {

  static propTypes = {
    counties: PropTypes.array,
    selectedIncident: PropTypes.object,
    incidents: PropTypes.array,
    selectedCounties: PropTypes.array,
  };

  componentWillMount() {
    if (this.props.counties.length === 0) {
      store.dispatch(getCounties());
    }
  }

  render() {
    const { counties } = this.props;

    return (
      <Layout className={s.content}>
        <Panel>
          <CountiesFilter counties={counties} selectedCounties={[]} />
        </Panel>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  counties: getAllCounties(state.counties),
  countiesError: state.counties.error,
});

export default connect(
  mapStateToProps
)(IncidentsPage);
