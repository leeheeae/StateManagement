import {useRecoilValue} from 'recoil';
import {authState} from '../atoms/auth';

export default function useUser() {
  const auth = useRecoilValue(authState);
  return auth.user;
}

/*
// redux
import {useSelector} from 'react-redux';
import {RootState} from '../slices';

export default function useUser() {
  return useSelector((state: RootState) => state.auth.user);
}
*/
