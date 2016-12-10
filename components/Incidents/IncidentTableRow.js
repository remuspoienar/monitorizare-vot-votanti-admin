import React, { PropTypes } from 'react';
import * as IncidentStatusTypes from './IncidentStatusTypes';

const IncidentTableRow = (props) => {

    const incident  = props.incident;
    let names       = incident.name.split(" ");
    let firstName   = "", lastName = "", statusClassName = "";
    const isSelected = props.selectedIncident != null && incident.id === props.selectedIncident.id;

    if(incident.status === IncidentStatusTypes.APPROVED) {
      statusClassName = "incident-approved";
    } else if(incident.status === IncidentStatusTypes.REJECTED) {
      statusClassName = "incident-rejected";
    }

    if(names.length > 1) {
      lastName = names[names.length - 1];
      names.pop();
      firstName = names.join(" ");
    } else {
      lastName = incident.name;
    }

  return (
    <div key = {incident.id} className = {"row " + statusClassName + (isSelected ? "incident-selected" : "")} 
                                                                onClick={() => props.selectIncident(incident)}>
      <div className = "col one-fifth"><span className="cell">{lastName}</span></div>
      <div className = "col one-fifth"><span className="cell">{firstName}</span></div>
      <div className = "col one-fifth"><span className="cell">{incident.city.name}</span></div>
      <div className = "col one-fifth"><span className="cell">{incident.county.name}</span></div>
      <div className = "col one-fifth"><span className="cell">{incident.createdAt}</span></div>
    </div>
  );

};

IncidentTableRow.propTypes = {
  incident: PropTypes.object,
};

export default IncidentTableRow;
