import React       from 'react';
import { connect } from 'react-redux';
import ACTION_TYPE from '../../action';

const Counter = (props) => {

  const { value, increment, decrement } = props;

  return (
    <>
      <h1>
        {
          value
        }
      </h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>

  );
};

const mapStateToProps = (state) => {
  return state.counterStore;
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch( {
                                 type: ACTION_TYPE.INCREMENT
                               } ),
    decrement: () => dispatch( {
                                 type: ACTION_TYPE.DECREMENT,
                               } ),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Counter );