import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {authorize, logout} from '../slices/auth';
import {useMemo} from 'react';

export default function useAuthActions() {
  const dispatch = useDispatch();

  //첫번째 인자로 액션 생성 함수들이 들어있는 객체를 넣고, 두번째는 디스패치를 넣음
  // useMemo를 사용해주는 것이 좋음 (useEffect에서 이 액션 생성 함수들을 사용할 때 일어나는 의도치 않은 버그를 제어하기 위해)
  return useMemo(
    () => bindActionCreators({authorize, logout}, dispatch),
    [dispatch],
  );
}
