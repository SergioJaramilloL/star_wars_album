
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { albumReducer } from './reducers/Album.reducer';
import { envelopesReducer } from './reducers/Envelopes.reducer';

const rootReducer = combineReducers({
  albumReducer,
  envelopesReducer
})
const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);