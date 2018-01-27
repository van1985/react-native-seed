/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
delete GLOBAL.XMLHttpRequest;

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

class Rn_poc extends Component {
  render() {
    return (
      <View >
        <Text >
          Welcome to React Native!
        </Text>
        <Text >
          To get started, edit index.ios.js
        </Text>
        <Text >
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}


const App = () =>(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);


AppRegistry.registerComponent('rn_poc', () => App);
