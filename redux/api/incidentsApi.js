import * as api from './baseApi';

export default {
  getIncidents(cb, errorCb) {
    return api.get('/incidents', {}, cb, errorCb);
  },
  approveIncident(incidentId, cb, errorCb) {  	
  	api.put(`/incidents/${incidentId}/approve`, {}, cb, errorCb);
  },
  rejectIncident(incidentId, cb, errorCb) {
  	api.put(`/incidents/${incidentId}/reject`, {}, cb, errorCb);
  }
};
