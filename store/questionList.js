import axios from 'axios';

const GET_QUESTION_LIST = 'GET_QUESTION_LIST';

const getQuestionList = (questionList) => ({ type: GET_QUESTION_LIST, questionList });

export const fetchQuestionList = () =>
  dispatch =>
    axios.get('https://lingoassim-backend.herokuapp.com/questionList')
      .then(res => res.data)
      .then(questionList => dispatch(getQuestionList(questionList)))
      .catch(console.error.bind(console));

export const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_QUESTION_LIST:
      return action.questionList;
    default:
      return state;
  }
};

export default reducer;
