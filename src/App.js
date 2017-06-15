import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './router';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyB1kMh5hlN90F3idqsJZdOKtr5MwDUdS9U",
      authDomain: "explorabilities-1486755057237.firebaseapp.com",
      databaseURL: "https://explorabilities-1486755057237.firebaseio.com",
      projectId: "explorabilities-1486755057237",
      storageBucket: "explorabilities-1486755057237.appspot.com",
      messagingSenderId: "114592013541"
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
};

export default App;