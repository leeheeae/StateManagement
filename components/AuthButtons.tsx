import {Button, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {authorize, logout} from '../slices/auth';

function AuthButtons() {
  const dispatch = useDispatch();

  const onPressLogin = () => {
    dispatch(
      authorize({
        id: 1,
        usernmae: 'johndeo',
        displayName: '히애',
      }),
    );
  };

  const onPressLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={onPressLogout} />
    </View>
  );
}

export default AuthButtons;
