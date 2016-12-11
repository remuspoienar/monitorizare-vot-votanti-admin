import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIncident } from '../../redux/actions/incidentsActions';
import * as IncidentStatusTypes from './IncidentStatusTypes';


import IncidentTableRow from './IncidentTableRow';

import { getIncidents, getSelectedIncident } from '../../redux/reducers/incidents';


class IncidentsTable extends Component {

  renderList() {	
  	
    return this.props.incidents.map((incident) => {
      	
      return (

      	<IncidentTableRow	key = {incident.id} incident = {incident} 
      						selectedIncident = {this.props.selectedIncident}
      						selectIncident = {this.props.selectIncident}  />
      );
    });
  }

  render() {

  	const pendingIncidentsCount = this.props.incidents
  						.filter(incident => incident.status === IncidentStatusTypes.PENDING)
  						.length;

    return (
  	   <div className = "row">
              <div id = "incidents-table" className = "col">                  
                <div className = "header-row">
                  <div className = "col one-fifth">Nume</div>
                  <div className = "col one-fifth">Prenume</div>
                  <div className = "col one-fifth">Localitate</div>
                  <div className = "col one-fifth">Județ</div>
                  <div className = "col one-fifth">Data și ora</div>
                </div>
                <div className="divider"></div> 
                <div id = "incidents-table-content" className = "row">   
                	<div className = "col">           
	              		{ this.renderList() }
	              	</div>
	              </div>
	              <div className = "footer-row">   
                	<div className = "col">           
	              		Total in asteptare: { pendingIncidentsCount } sesizari
	              	</div>
	              </div>
              </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    incidents: getIncidents(state.incidents),
    selectedIncident: getSelectedIncident(state.incidents)
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectIncident }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(IncidentsTable);
