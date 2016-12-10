import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import history from '../../core/history';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import Incident from '../../components/incidents/Incident';
import CountiesFilter from '../../components/CountiesFilter'
import s from './styles.css';

import { fetchCounties } from '../../redux/actions/countiesActions';
import { fetchIncidents } from '../../redux/actions/incidentsActions';
import { getCounties } from '../../redux/reducers/counties';
import { getIncidents } from '../../redux/reducers/incidents';

class IncidentsPage extends React.Component {

  static propTypes = {
    counties: PropTypes.array,
    selectedIncident: PropTypes.object,
    incidents: PropTypes.array,
    selectedCounties: PropTypes.array,
  };

  componentWillMount() {
    if (!this.props.authenticated) {
      history.push({ pathname: '/login' });
      return;
    }

    if (this.props.counties.length === 0) {
      store.dispatch(fetchCounties());
    }

    store.dispatch(fetchIncidents());
  }

  render() {
    const incidents = this.props.incidents;

    return (
      <Layout className={s.content}>
        <Panel>
          <h3 className={s.title}>Sesizari</h3>
          <table>
            <thead>
              <tr>
                <th>Nume</th>
                <th>Localitate</th>
                <th>Județ</th>
                <th>Data și ora</th>
              </tr>
            </thead>
            <tbody>
            {
              incidents.map((incident) => {
                return (
                  <Incident key={incident.id} incident={incident} />
                );
              })
            }
            </tbody>
          </table>
        </Panel>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  counties: getCounties(state.counties),
  authenticated: state.auth.authenticated,
  incidents: getIncidents(state.incidents),
  countiesError: state.counties.error,
  incidentsError: state.incidents.error,
});

export default connect(
  mapStateToProps
)(IncidentsPage);
