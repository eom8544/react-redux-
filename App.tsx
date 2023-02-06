import * as React from 'react';
import './style.css';
import { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      num: 1,
    };
  }
  const newState = { ...currentState };
  switch (action.type) {
    case 'PLUS':
      newState.num++;
  }
  return newState;
}
const store = createStore(reducer);
export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
