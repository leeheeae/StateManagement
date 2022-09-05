import {Button, View} from 'react-native';
import React from 'react';
import useAuthActions from '../hooks/useAuthActions';

function AuthButtons() {
  const {authorize, logout} = useAuthActions();

  const onPressLogin = () => {
    authorize({
      id: 1,
      usernmae: 'johndeo',
      displayName: '히애',
    });
  };

  const onPressLogout = () => {
    logout();
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={onPressLogout} />
    </View>
  );
}

export default AuthButtons;
