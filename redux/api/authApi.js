import * as api from './baseApi';

export default {
  getAuthUrl(cb, errorCb) {
    return api.get('../info/authurl', {}, cb, errorCb);
  },
};
