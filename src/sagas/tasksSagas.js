import { put }     from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actionTypes.js';

export function * getTasksSaga (action) {
  yield put( {
               type: ACTION_TYPE.GET_TASKS_REQUEST,
             } );
  try {
    const data = yield fetch();
    yield put( {
                 type: ACTION_TYPE.GET_TASKS_SUCCESS,
                 tasks: data,
               } );

  } catch (e) {
    yield put( {
                 type: ACTION_TYPE.GET_TASKS_ERROR,
                 error: e,
               } );
  }
}

