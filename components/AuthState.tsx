import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../slices';

function AuthStatus() {
  const user = useSelector((state: RootState) => state.auth.user);

  console.log(user);

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인하세요'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  status: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default AuthStatus;
