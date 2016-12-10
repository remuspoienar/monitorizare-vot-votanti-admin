import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/reducers';

import Layout from '../../components/Layout';
import Panel from '../../components/Panel';
import Button from '../../components/Button';
import IncidentsTable from '../../components/incidents/IncidentsTable';
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

  refresh() {
    console.log(this.forceUpdate);
    this.forceUpdate();
  }


  render() {
    const incidents     = this.props.incidents;

    return (
      <Layout className={s.content + " " + "incidents-layout"}>
        <Panel>
          <h3 className={s.title}>Lista Sesizari</h3> 
          <div className = "row">
              <div className = "col two-thirds">
                <Button id = "refresh-button" 
                onClick={() => this.refresh()}
                type="raised" colored = {true}>Refresh</Button>   
              </div>
              <div className = "col one-third"></div>
          </div> 
          <IncidentsTable />       
        </Panel>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  counties: getCounties(state.counties),
  incidents: getIncidents(state.incidents),
  countiesError: state.counties.error,
  incidentsError: state.incidents.error,
});

export default connect(
  mapStateToProps
)(IncidentsPage);
