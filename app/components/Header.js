import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


// const Header = () => {
//   return (
//     <View>
//       <Text>오늘의 할 일</Text>
//     </View>
//   )
//   }

//   export styles = Style
export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>MyTodoApp</Text>
    </View>
  );
};



const styles = StyleSheet.create({
    headercontainer: {
        marginTop: 50,
        marginBottom: 50,
    },
    headertext:{
        fontSize: 25,
        fontWeight :'bold',
        color: '#3f4eb6',
    },
  });