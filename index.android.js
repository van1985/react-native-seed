import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';
import configureStore from './app/store';

const store = configureStore();

const App = () =>(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('rn_poc', () => App);