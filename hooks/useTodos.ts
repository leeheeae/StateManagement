import {useRecoilValue} from 'recoil';
import {todosState} from '../atoms/todos';

export default function useTodos() {
  return useRecoilValue(todosState);
}

/*
// redux
import {useSelector} from 'react-redux';

export default function useTodos() {
  return useSelector(state => state.todos);
}
*/
