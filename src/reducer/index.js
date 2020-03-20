import { combineReducers } from 'redux';
import counterReducer      from './counter.js';
import usersReducer        from './users.js';
import tasksReducer        from './tasksReducer.js';

export default combineReducers( {
                                  usersStore: usersReducer,
                                  counterStore: counterReducer,
                                  tasksStore: tasksReducer,
                                } );
