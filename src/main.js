import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import { RouterComponent } from './router';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

// Picking available middleware for us
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      // loggerMiddleware,
    )
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class PickerBox extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterComponent/>
      </Provider>
    );
  }
};
