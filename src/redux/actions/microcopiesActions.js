import {
  MICROCOPIES_FETCH_ALL_SUCCESS,
  MICROCOPIES_FETCH_ALL_FAILURE,
  MICROCOPIES_FETCH_ALL_REQUEST,
  SET_MICROCOPY
} from "../constants/MicrocopiesActionTypes";

const microcopiesApi = {
  getMicrocopies: success =>
    success({
      data: [
        { id: 12, name: "Microcopy 1", slug: "about-us-p1", text: "Edit me" },
        {
          id: 13,
          name: "Microcopy 21",
          slug: "about-us-header",
          text: "Edit me".repeat(500)
        },
        {
          id: 17,
          name: "Microcopy 56",
          slug: "about-us-p5",
          text: "Edit me again"
        }
      ]
    })
};

const fetchMicrocopiesSuccess = data => ({
  type: MICROCOPIES_FETCH_ALL_SUCCESS,
  data
});

const fetchMicrocopiesFailure = error => ({
  type: MICROCOPIES_FETCH_ALL_FAILURE,
  error
});

export const fetchMicrocopies = () => dispatch => {
  dispatch({ type: MICROCOPIES_FETCH_ALL_REQUEST });

  microcopiesApi.getMicrocopies(
    data => {
      dispatch(fetchMicrocopiesSuccess(data));
    },
    error => {
      dispatch(fetchMicrocopiesFailure(error));
    }
  );
};

export const setMicrocopy = slug => (dispatch, getState) => {
  const list = getState().microcopies.list;

  if (!list) {
    dispatch(fetchMicrocopies());
  }

  setTimeout(() => dispatch({ type: SET_MICROCOPY, slug }), 500);
};
