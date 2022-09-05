import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
// import TodoApp from './components/TodoApp';
import PostsApp from './components/PostsApp';

function App() {
  return (
    <Provider store={store}>
      <PostsApp />
    </Provider>
  );
}

export default App;
