import React, { useEffect } from 'react';
import { connect }          from 'react-redux';
import ACTION_TYPE          from '../../actions/actionTypes.js';

const UsersList = (props) => {

  const { isFetching, users, error, getUsersRequest } = props;

  const loadUsers = () => {
    getUsersRequest();
  };

  useEffect( () => {
    loadUsers();
  }, [] );

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
    </>
  );

};

const mapStateToProps = (state) => {
  return state.usersStore;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersRequest: () => {

      dispatch( {
                  type: ACTION_TYPE.GET_USERS_REQUEST,
                } );
    }

  };
};

export default connect( mapStateToProps, mapDispatchToProps )( UsersList );

