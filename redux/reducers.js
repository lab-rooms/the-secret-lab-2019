import { combineReducers } from 'redux';
import kentico from './kentico/reducers';

const reducers = combineReducers({
  kentico,
});

export default reducers;
