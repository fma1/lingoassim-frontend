const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestions = (questions) => ({ type: GET_QUESTIONS, questions });

export const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
   default:
      return state;
  }
};

export default reducer;
