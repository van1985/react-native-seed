import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import AppContainer from './containers/AppContainer';
import configureStore from './app/store';

const store = configureStore();

const app = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default app;