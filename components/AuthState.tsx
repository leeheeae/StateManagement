import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function AuthStatus() {
  return (
    <View style={styles.status}>
      <Text style={styles.text}>AuthStatus</Text>
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
