import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Provider store={store}>
      {/* <AuthApp /> */}
      <TodoApp />
    </Provider>
  );
}

export default App;
