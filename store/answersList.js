const GET_ANSWERS = 'GET_ANSWERS';

export const getAnswers = (answers) => ({ type: GET_ANSWERS, answers });

export const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ANSWERS:
      return action.answers;
   default:
      return state;
  }
};

export default reducer;
