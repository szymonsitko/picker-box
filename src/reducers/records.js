import * as types from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CONNECT_TO_DATABASE:
      return { ...state, all_records: action.payload };
    case types.STORE_GAME_DETAILS:
      return { ...state, user_object: action.payload };
    default:
      return state;
  }
}
