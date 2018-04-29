const GET_CURRENT_POINTS = 'GET_CURRENT_POINTS';

export const getPoints = (currentPoints) => ({ type: GET_CURRENT_POINTS, currentPoints });

export const incrementCurrentPoints = () =>
  (dispatch, getState) =>
    dispatch(getPoints(getState().currentPoints + 10));

export const resetCurrentPoints = () =>
  (dispatch) =>
    dispatch(getPoints(0));

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case GET_CURRENT_POINTS:
      return action.currentPoints;
    default:
      return state;
  }
};

export default reducer;
