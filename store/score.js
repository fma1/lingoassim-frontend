const RESET_SCORE = 'RESET_SCORE';
const INCREMENT_SCORE = 'INCREMENT_SCORE';

export const resetScore = () => ({ type: RESET_SCORE });
export const incrementScore = (score) => ({ type: INCREMENT_SCORE, score });

export const incrementScoreThunker = () =>
  (dispatch, getState) =>
    dispatch(incrementScore(getState().currentPoints));

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case RESET_SCORE:
      return 0;
    case INCREMENT_SCORE:
      return state + action.score;
    default:
      return state;
  }
};

export default reducer;
