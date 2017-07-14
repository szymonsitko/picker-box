import { combineReducers } from 'redux';
import UserReducer from './user';
import RecordsReducer from './records';

export default combineReducers({
  user: UserReducer,
  records: RecordsReducer
});
