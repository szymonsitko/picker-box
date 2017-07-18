import * as types from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CONNECT_TO_DATABASE:
      return { ...state, all_records: action.payload };
    case types.STORE_GAME_DETAILS:
    case types.UPDATE_GAME_DETAILS:
      return { ...state, user_object: action.payload };
    case types.DELETE_LAST_GAME_ENTRY:
      return { ...state, user_object: {} };
    default:
      return state;
  }
}
