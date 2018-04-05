import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import AppContainer from './containers/AppContainer';
import configureStore from './store';

const store = configureStore();

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;