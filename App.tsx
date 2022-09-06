import React from 'react';
import {RecoilRoot} from 'recoil';
// import AuthApp from './components/AuthApp';
// import {Provider} from 'react-redux';
// import {store} from './store';
// import TodoApp from './components/TodoApp';
import PostsApp from './components/PostsApp';

function App() {
  return (
    <RecoilRoot>
      <PostsApp />
    </RecoilRoot>
  );
}

export default App;
