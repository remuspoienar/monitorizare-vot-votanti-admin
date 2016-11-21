// selectLocationState expects a plain JS object for the routing state
import { createSelector } from 'reselect';
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectGlobal = () => (state) => state.get('global');

const isLoggedIn = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('isLoggedIn')
);

export {
  selectLocationState,
  isLoggedIn,
};
