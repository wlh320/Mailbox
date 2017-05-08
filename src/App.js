import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Mailbox from './components/mailbox'
import {createStore} from 'redux'
import inboxApp from './reducers'

const store = createStore(inboxApp)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Mailbox />
      </Provider>
    );
  }
}

export default App;
