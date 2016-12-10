import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedIncident } from '../../redux/reducers/incidents';


class IncidentDetails extends Component {

  render() {

    const incident = this.props.incident;
    if (!incident) {
      return (
        <div id="empty-incident-details-row" className = "row valign-wrapper">
            <div className = "col valign center">Click pe o sesizare pentru detalii</div>
        </div>
      );
    }

    let names = incident.name.split(" ");
    let firstName = "", lastName = "", statusClassName = "";

    if (names.length > 1) {
      lastName = names[names.length - 1];
      names.pop();
      firstName = names.join(" ");
    } else {
      lastName = incident.name;
    }

  return (
    <div className = "row">
      <div id = "incident-details" className = "col">
          <div className = "row">
            <div className = "col"><span className="bold">Nume: </span>{lastName}</div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Prenume: </span>{firstName}</div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Judet: </span>{incident.county.name}</div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Localitate: </span>{incident.city.name}</div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Sectie: </span>{incident.precinct.precinctNumber}</div>
          </div>

          <div className = "row row-spacing">
            <div className = "col"><span className="bold">Descriere: </span></div>
          </div>
          <div className = "row">
            <div className = "col">
              {incident.description}
            </div>
          </div>
          <div className = "row row-spacing">
            <div className = "col"><span className="bold">Imagini: </span></div>
          </div>
          <div className = "row">
            <div className = "col">
              <img src = {incident.image}  className="incident-image" alt="Avenu" />
            </div>
          </div>
        </div>
    </div>

  );

  }
}

function mapStateToProps(state) {
  return {
    incident: getSelectedIncident(state.incidents)
  };
}

export default connect(mapStateToProps)(IncidentDetails);
