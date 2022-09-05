import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';

function Todos() {
  const todos = [
    {id: 1, text: '리액트 네이티브 배우기', done: true},
    {id: 2, text: '상태 관리 배우기', done: false},
  ];

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
