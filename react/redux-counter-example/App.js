import React from "react";
import { createStore } from "redux";
import { Provider, connect, useDispatch} from "react-redux";

import "./styles.css";

const initialState = {
  counter: 0
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = () => {
  const dispatch = useDispatch();
  return ({
  increament: () => dispatch({ type: "INC" }),
  decreament: () => dispatch({ type: "DEC" })
  })
};

const COUNTER = ({ counter, increament, decreament }) => {

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  );
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(COUNTER);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

export default App;
