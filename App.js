import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import Listitem from './app/components/Listitem';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      todos:[]
    }
  }
componentWillMount() {
  this.getData();
}

  storeData = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state));
  }

  getData = () => {
    AsyncStorage.getItem('@todo:state').then((state) =>{
      if (state !== null) {
        this.setState(JSON.parse(state));
      }
  })
  }

  _maketodoItem =({item,index})=>{
    return (
      <Listitem 
        name = {item.title} 
        isComplete = {item.isComplete}
        changeComplete = {()=>{
          const newTodo = [...this.state.todos];
          newTodo[index].isComplete =! newTodo[index].isComplete;
          this.setState({ todos: newTodo }, this.storeData)
        }}
        deleteItem={() =>{
          const newTodo = [...this.state.todos];
          newTodo.splice(index, 1);
          this.setState({todos:newTodo}, this.storeData);
        }}
      />
    );
    }
  _changeText=(value)=>{
    this.setState({inputValue:value});
  }
  _addTodoItem=() =>{
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos;

      const newTodo = {title : this.state.inputValue, iscomplete: false};

      this.setState({
        inputValue:'',
        todos : prevTodo.concat(newTodo)}, this.storeData
      );
  }
  }

  

  render(){
  const { todos, inputValue} = this.state
  const { _maketodoItem, _changeText, _addTodoItem } = this


  return (
    <View style={styles.container}>
      <View style={styles.headercenter}>
      <Header/>
      </View>
      <View style={styles.subtitleposion}>
        <Subtitle title="해야 할 일"/>
        <Input
          value ={inputValue}
          changeText = {_changeText}
          addTodo = {_addTodoItem}/>
      </View>
      <View style={styles.subtitleposion}>
        <Subtitle title="해야 할 일 목록"/>
        
        <FlatList
          data ={todos}
          renderItem = {_maketodoItem}
          keyExtractor ={(item,index)=>{return index.toString()}}/>
      
      
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  headercenter: {
    alignItems:"center",
  },
  subtitleposion: {
    marginLeft:50,
  },
});
