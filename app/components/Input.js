import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({value, changeText, addTodo}) {
  return (
    <TextInput
        value={value}
        onChangeText={changeText}
        onEndEditing={addTodo}


        style ={styles.input}
        placeholder={"할 일을 입력해주세요"}
        maxLength={30}
        returnKeyType="done"/>
  );
};

const styles = StyleSheet.create({
    
  input:{
      fontSize: 17,
      fontWeight :'bold',
      marginTop: 10,
      marginBottom: 20,
  },
});

