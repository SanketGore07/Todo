
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,  Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/pages/header';
import ToDoItem from './components/pages/todoitem';
import AddToDos from './components/pages/addTodos';

export default function App() {

  const[todos, settodos]=useState([
    {name:'practice german', key:'1'},
    {name:' audiobook', key:'2'}
  ])

  const submitHandler =(text)=>{
    if(text.length>1){
      settodos((prevtodos)=>{
        return [
          {name: text, key: Math.random().toString()},
          ...prevtodos
        ];
      });

    }else{
      Alert.alert('Oops','Please enter something',[{text:'OK',onPress:()=>console.log('alert closed')}]);
    }  
  }

  const pressHandler = (key)=>{
    settodos((prevtodos)=>{
      return prevtodos.filter(todo => todo.key!=key);
    });
  }

  return (

      
  <View style={styles.container}>
      <Text style={styles.head}>Welcome To Ally, your personal helper😊</Text>
    <Header style={styles.top}/>
    
    <View style={styles.content}>
    <AddToDos submitHandler={submitHandler}/>
      <View style={styles.item1}> 
        
        <FlatList data={todos} renderItem={({item})=>(<ToDoItem item={item} pressHandler={pressHandler}/>)}/>
      </View>
    
    </View>
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40,
    backgroundColor: 'pink',
    flex:1,
  },
  head: {
    paddingBottom: 10,
  },
  item1:{
    flex:1,
    flexDirection:'row',
    padding:10,
    marginTop:10,
    borderColor:'bbb',
    backgroundColor:'yellow',
    fontWeight:'bold',
  },
  top:{
    top:'0',
    left:'0',
  }
});
