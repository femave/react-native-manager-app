'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCByxxs4tMI090FQyA8F8NELoxHPpg0Xvs',
      authDomain: 'manager-bde3e.firebaseapp.com',
      databaseURL: 'https://manager-bde3e.firebaseio.com',
      projectId: 'manager-bde3e',
      storageBucket: '',
      messagingSenderId: '457343110653'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;