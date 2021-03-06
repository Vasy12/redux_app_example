import ACTION_TYPE from '../actions/actionTypes.js';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};


const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_TYPE.GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPE.GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.users,
      };
    case ACTION_TYPE.GET_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default usersReducer;
