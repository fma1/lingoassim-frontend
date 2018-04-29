import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import questionIndex from './questionIndex';
import selectedParts from './selectedParts';
import questionsList from './questionsList';
import answersList from './answersList';
import jumbledPartsList from './jumbledPartsList';
import currentPoints from './currentPoints';
import score from './score';

const rootReducer = combineReducers({ questionIndex, selectedParts, questionsList, answersList, jumbledPartsList, currentPoints, score });
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['questionIndex', 'selectedParts', 'questionsList', 'answersList', 'jumbledPartsList', 'currentPoints'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, middleware);

export default (onCompletion) => {
  persistStore(store, onCompletion);
  return store;
};
