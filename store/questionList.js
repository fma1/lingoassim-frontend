import axios from 'axios';
import { getQuestions } from './questionsList';
import { getAnswers } from './answersList';
import { getJumbledParts } from './jumbledPartsList';

export const fetchQuestionList = () =>
  dispatch =>
    axios.get('https://lingoassim-backend.herokuapp.com/questionList')
      .then(res => res.data)
      .then(questionList => {
        dispatch(getQuestions(questionList.map(question => question.question)));
        dispatch(getAnswers(questionList.map(question => question.answer)));
        dispatch(getJumbledParts(questionList.map(question => question.jumbledParts)));
      })
      .catch(console.error.bind(console));
