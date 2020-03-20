import React                                  from 'react';
import { connect }                            from 'react-redux';
import ACTION_TYPE                            from '../../actions/actionTypes.js';
import { decrementCounter, incrementCounter } from '../../actions/actionCreators.js';

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
    increment: () => dispatch( incrementCounter() ),
    decrement: () => dispatch( decrementCounter() ),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Counter );