import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import AuthApp from './components/AuthApp';

function App() {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
}

export default App;
