import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import useTodosActions from '../hooks/useTodosAction';
import BlackButton from './BlackButton';

function TodoInput() {
  const [text, setText] = useState('');
  const {add} = useTodosActions();

  const onPress = () => {
    console.log('등록');
    add(text);
    setText('');
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="할일을 입력해주세요"
        value={text}
        onChangeText={setText}
      />
      <BlackButton onPress={onPress} title="등록" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});

export default TodoInput;
