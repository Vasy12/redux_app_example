import React, { useEffect } from 'react';
import { connect }          from 'react-redux';
import ACTION_TYPE          from '../../action';

const UsersList = (props) => {

  const { isFetching, users, error, getUsersRequest, getUsersResponse, getUsersError } = props;

  const loadUsers = () => {
    getUsersRequest();
    fetch( 'http://localhost:3000/api/admin/users' )
      .then( response => response.json() )
      .then( data => {getUsersResponse( data );} )
      .catch( e => {
        getUsersError( e );
      } );
  };

  if (error) {
    return <h1>ERROR!</h1>;
  }

  if (isFetching) {
    return <h1>ЖДИ!!!!</h1>;
  }

  return (
    <>
      <ul>
        {
          users.map( item => (<li key={item.id}>{`${item.firstName} ${item.lastName}`}</li>) )
        }
      </ul>
      <button onClick={loadUsers}>load users</button>
    </>
  );

};

const mapStateToProps = (state) => {
  return state.usersStore;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersRequest: () => dispatch( {
                                       type: ACTION_TYPE.GET_USERS_REQUEST,
                                     } ),
    getUsersResponse: (users) => dispatch( {
                                             type: ACTION_TYPE.GET_USERS_RESPONSE,
                                             users,
                                           } ),
    getUsersError: (error) => dispatch( {
                                          type: ACTION_TYPE.GET_USERS_ERROR,
                                          error,
                                        } )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( UsersList );

