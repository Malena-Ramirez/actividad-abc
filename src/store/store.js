import loginReducer from "../reducers/loginReducer.js";
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  login: loginReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk))
)