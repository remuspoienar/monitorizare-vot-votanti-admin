import {
  MICROCOPIES_FETCH_ALL_SUCCESS,
  MICROCOPIES_FETCH_ALL_FAILURE,
  SET_MICROCOPY
} from "../constants/MicrocopiesActionTypes";

const reducer = (state = { list: null, current: null }, action) => {
  switch (action.type) {
    case MICROCOPIES_FETCH_ALL_SUCCESS:
      return { ...state, list: action.data.data, error: null };
    case MICROCOPIES_FETCH_ALL_SUCCESS:
      return { ...state };
    case MICROCOPIES_FETCH_ALL_FAILURE:
      return { ...state, error: action.error };
    case SET_MICROCOPY:
      const current = state.list.find(item => item.slug === action.slug);
      return { ...state, current };
    default:
      return state;
  }
};

export default reducer;

export const getMicrocopies = state => state.list;
