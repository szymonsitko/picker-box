import * as types from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CONNECT_TO_DATABASE:
      return { ...state, all_records: action.payload };
    case types.STORE_GAME_DETAILS:
    case types.UPDATE_GAME_DETAILS:
    case types.UPDATE_USER_RESULTS_ON_REDUCER:
      return { ...state, user_object: action.payload };
    case types.DELETE_LAST_GAME_ENTRY:
    case types.CLEAR_USER_DATA:
      return { ...state, user_object: {} };
    default:
      return state;
  }
}
