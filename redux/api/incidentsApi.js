import * as api from './baseApi';

export default {
  getIncidents(cb, errorCb) {
    return api.get('/incidents', {}, cb, errorCb);
  },
};
