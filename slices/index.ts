import {combineReducers} from 'redux';
import auth from './auth';
import todos from './todos';

const rootReducer = combineReducers({auth, todos});

// rootReducer 함수의 반환값 타입을 RootState type alias로 지정
export type RootState = ReturnType<typeof rootReducer>;

// 자동으로 state 파라미터를 RootState로 추론하게 설정하기 (적용이 안되는딩)
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
