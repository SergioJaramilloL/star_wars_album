
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { albumReducer } from './reducers/Album.reducer';

const rootReducer = combineReducers({
  albumReducer
})
const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);