import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

function Todos() {
  const todos = useTodos();

  return (
    <FlatList
      style={styles.todos}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} done={item.done} text={item.text} />
      )}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  todos: {flex: 1},
  separator: {
    height: 1,
    backgroundColor: '#000',
  },
});

export default Todos;
