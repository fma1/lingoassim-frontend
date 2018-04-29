import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import questionList from './questionList';
import questionIndex from './questionIndex';

const reducer = combineReducers({ questionList, questionIndex });
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));
const store = createStore(reducer, middleware);

export default store;
