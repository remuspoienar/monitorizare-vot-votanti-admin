import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchCounties } from "../redux/actions/countiesActions";
import { fetchIncidents } from "../redux/actions/incidentsActions";
import { getCounties } from "../redux/reducers/counties";
import { getIncidents } from "../redux/reducers/incidents";

import IncidentsList from "../components/Incidents/IncidentsList";

export class Incidents extends PureComponent {
  static propTypes = {
    counties: PropTypes.array,
    selectedIncident: PropTypes.object,
    incidents: PropTypes.array,
    selectedCounties: PropTypes.array
  };

  componentDidMount() {
    this.props.dispatch(fetchCounties());
    this.props.dispatch(fetchIncidents());
  }

  render() {
    const { counties, incidents } = this.props;
    if (!(counties.length && incidents.length)) {
      return <h2>Loading...</h2>;
    }
    return <IncidentsList incidents={incidents} />;
  }
}

const mapStateToProps = state => ({
  counties: getCounties(state.counties),
  incidents: getIncidents(state.incidents),
  error: state.counties.error || state.incidents.error
});

export default connect(mapStateToProps)(Incidents);
