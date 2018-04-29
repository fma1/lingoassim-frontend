import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import questionIndex from './questionIndex';
import selectedParts from './selectedParts';
import questionsList from './questionsList';
import answersList from './answersList';
import jumbledPartsList from './jumbledPartsList';
import currentPoints from './currentPoints';

const reducer = combineReducers({ questionIndex, selectedParts, questionsList, answersList, jumbledPartsList, currentPoints });
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));
const store = createStore(reducer, middleware);

export default store;
