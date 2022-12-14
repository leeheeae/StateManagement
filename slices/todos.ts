import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialState: Todo[] = [
  {id: 1, text: '리액트 네이티브', done: true},
  {id: 2, text: '네이티브', done: false},
];

let nextId = 3;

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // 액션 생성 함수가 호출되어 액션을 만들기 전에 특정 작업을 수행
    // add('리덕스 배우기') => { type: 'todos.add', payload: {id: 1, text: '리덕스 배우기' }}
    add: {
      prepare(text: string) {
        const prepared = {payload: {id: nextId, text}};
        nextId += 1;
        return prepared;
      },
      reducer(state, action: PayloadAction<{id: number; text: string}>) {
        state.push({
          ...action.payload,
          done: false,
        });
      },
    },
    //id로 원하는 원소 제거
    remove(state, action: PayloadAction<number>) {
      const index = state.findIndex(todo => todo.id === action.payload);
      state.splice(index);
    },
    toggle(state, action: PayloadAction<number>) {
      //불변성이 알아서 관리되기 때문에 .map을 사용하지 않고 원하는 원소를 찾아서 바로 수정해주면 됨
      const selected = state.find(todo => todo.id === action.payload);
      if (!selected) {
        return;
      }
      selected.done = !selected.done;
    },
  },
});

export const {add, remove, toggle} = todoSlice.actions;
export default todoSlice.reducer;
