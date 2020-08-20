import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert,  TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Fare cacca', key: '1'}
  ]);
  const [text, setText] = useState('');
  
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return[
          { text: text, key: Math.random().toString() },
          ...prevTodos,
  
        ];
      })
      setText('')
    } else {
      Alert.alert('OOPS!', 'Min. 3 chars long', [
        {text: 'Righ!', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  return (
    // <Sandbox /> 
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} text={text} setText={setText} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
