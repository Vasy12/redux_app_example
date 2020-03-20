import { takeLatest }   from 'redux-saga/effects';
import ACTION_TYPE      from '../actions/actionTypes.js';
import { getUsersSaga } from './usersSagas.js';
import { getTasksSaga } from './tasksSagas.js';

export default function * rootSaga () {
  yield takeLatest( ACTION_TYPE.GET_USERS_REQUEST, getUsersSaga );
  yield takeLatest( ACTION_TYPE.GET_TASKS_ACTION, getTasksSaga );
}