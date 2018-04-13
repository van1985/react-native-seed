import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import Navigator from './navigator';
import configureStore from './store';

const store = configureStore();

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;