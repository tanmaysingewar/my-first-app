import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View , TextInput, ScrollView, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courceGoles, setCourceGoles] = useState([])

  const [isAddMode, setisAddMode] = useState(false)


  const addGoleHandler = (goleTitle) =>{
    setCourceGoles([...courceGoles, {id : Math.random().toString(), value : goleTitle}])
    setisAddMode(false)
  }

  const removeGoleHandler = goleID =>{
    setCourceGoles(currentGole => {
      return currentGole.filter((gole)=> gole.id !== goleID)
    })
  }

  const cancleGoel = () =>{
    setisAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title='Add New Gole' onPress={() => setisAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGole={addGoleHandler} onCancle={cancleGoel} />
      <FlatList
       data={courceGoles}
        renderItem={itemData => (
          
         <GoalItem id={itemData.item.id} onDelete={removeGoleHandler} title={itemData.item.value} />
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen : {
    padding: 30
  }

})