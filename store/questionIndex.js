const GET_QUESTION_INDEX = 'GET_QUESTION_INDEX';

export const getQuestionIndex = (questionIndex) => ({ type: GET_QUESTION_INDEX, questionIndex });

export const incrementQuestionIndex = () =>
  (dispatch, getState) =>
    dispatch(getQuestionIndex(getState.questionIndex + 1));

export const resetQuestionIndex = () =>
  (dispatch) =>
    dispatch(getQuestionIndex(0));

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case GET_QUESTION_INDEX:
      return action.questionIndex;
    default:
      return state;
  }
};

export default reducer;
