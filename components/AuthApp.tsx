import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import AuthStatus from './AuthState';
import AuthButtons from './AuthButtons';

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default AuthApp;
