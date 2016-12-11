import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../components/Button';
import { getSelectedIncident } from '../../redux/reducers/incidents';
import { approveIncident, rejectIncident } from '../../redux/actions/incidentsActions';
import * as IncidentStatusTypes from './IncidentStatusTypes';


class IncidentDetails extends Component {

  constructor(props) {
    super(props);

    this.renderApprovedActionRow = this.renderApprovedActionRow.bind(this);
    this.renderPendingActionRow  = this.renderPendingActionRow.bind(this);
    this.renderRejectedActionRow = this.renderRejectedActionRow.bind(this);
  }

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
    let firstName = "", lastName = "", statusClassName = "", status = "", renderActionRow;

    if (names.length > 1) {
      lastName = names[names.length - 1];
      names.pop();
      firstName = names.join(" ");
    } else {
      lastName = incident.name;
    }
      
      switch (incident.status) {

        case IncidentStatusTypes.APPROVED:
          status = "APROBAT";
          statusClassName = "approved-status";
          renderActionRow = this.renderApprovedActionRow;
          break;
        case IncidentStatusTypes.REJECTED:
          status = "RESPINS";
          statusClassName = "rejected-status";
          renderActionRow = this.renderRejectedActionRow;
          break;
        default:
          status = "IN ASTEPTARE";
          statusClassName = "pending-status";
          renderActionRow = this.renderPendingActionRow;
      }

  return (
    <div className = "row">
      <div id = "incident-details" className = "col">

          <div className = "row">
            <div className = "col">
              <span className="bold">Status: </span><span className={statusClassName + " bold"}>{status}</span>
            </div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Nume: </span>{lastName}</div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Prenume: </span>{firstName}</div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Judet: </span>{incident.county ? incident.county.name : ""}</div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Localitate: </span>{incident.city ? incident.city.name : ""}</div>
          </div>

          <div className = "row">
            <div className = "col"><span className="bold">Sectie: </span>{incident.precinct ? incident.precinct.precinctNumber : ""}</div>
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
              { incident.image ? <img src = {incident.image}  className="incident-image" /> : "" }
            </div>
          </div>
          { renderActionRow() }
        </div>
    </div>

  );

  }

  renderApprovedActionRow() {
    return (
        <div className = "row">
          <div className = "col">
                <Button id = "reject-button" className = "incident-action"
                onClick={() => this.props.rejectIncident(this.props.incident.id)}
                type="raised" colored = {true}>Respinge</Button> 
          </div>
        </div>
    );
  }

  renderPendingActionRow() {
      return (
          <div className = "row">
            <div className = "col one-half">
                 <Button id = "approve-button" className = "incident-action"
                  onClick={() => this.props.approveIncident(this.props.incident.id)}
                  type="raised" colored = {true}>Aproba</Button> 
            </div>
            <div className = "col one-half">
                  <Button id = "reject-button"  className = "incident-action"
                  onClick={() => this.props.rejectIncident(this.props.incident.id)}
                  type="raised" colored = {true}>Respinge</Button> 
            </div>
          </div>
      );
    }

  renderRejectedActionRow() {
      
      return (
          <div className = "row">
            <div className = "col">
                 <Button id = "approve-button" className = "incident-action"
                  onClick={() => this.props.approveIncident(this.props.incident.id)}
                  type="raised" colored = {true}>Aproba</Button> 
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ approveIncident, rejectIncident }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(IncidentDetails);

