import {
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  isLoggedIn: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
