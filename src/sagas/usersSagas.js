import { put }     from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actionTypes.js';

export function * getUsersSaga () {

  try {
    const users = yield fetch( 'http://localhost:3000/api/admin/users' ).then( response => response.json() );
    yield put( {
                 type: ACTION_TYPE.GET_USERS_SUCCESS,
                 users,
               } );
  } catch (e) {
    yield put( {
                 type: ACTION_TYPE.GET_USERS_ERROR,
                 error: e,
               } );
  }
}



