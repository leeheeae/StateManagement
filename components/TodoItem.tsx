import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import useTodosActions from '../hooks/useTodosAction';
import BlackButton from './BlackButton';

function TodoItem({id, text, done}: {id: number; text: string; done: boolean}) {
  const {toggle, remove} = useTodosActions();

  const onToggle = () => {
    console.log(`토글 ${id}`);
    toggle(id);
  };

  const onRemove = () => {
    console.log(`제거 ${id}`);
    remove(id);
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>
      <BlackButton onPress={onRemove} title="삭제" />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    flex: 1,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
