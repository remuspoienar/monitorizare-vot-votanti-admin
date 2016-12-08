import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
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
    if (this.props.counties.length === 0) {
      store.dispatch(fetchCounties());
    }

    store.dispatch(fetchIncidents());
  }

  render() {
    const { counties } = this.props;

    return (
      <Layout className={s.content}>
        <Panel>
          <h3 className={s.title}>Sesizari</h3>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col">
              <p>Filters</p>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <p>Filters</p>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <p>Sesizari</p>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              Sesizare
            </div>
          </div>
        </Panel>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  counties: getCounties(state.counties),
  incidents: getIncidents(state.counties),
  countiesError: state.counties.error,
  incidentsError: state.incidents.error,
});

export default connect(
  mapStateToProps
)(IncidentsPage);
