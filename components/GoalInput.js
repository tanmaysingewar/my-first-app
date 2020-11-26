import React,{useState} from 'react'
import { View, TextInput, StyleSheet , Button } from 'react-native'
const GoalInput = (props) => {

  const [enterGole, setEnterGole] = useState('')

  const handleChange = (text)=>{
    setEnterGole(text)
  }
    return (
        <View  style={styles.inputContainer}>
      <TextInput placeholder="Cource Gole" style={styles.input} onChangeText={handleChange} value={enterGole} />
        <Button title="Add" onPress={() => props.onAddGole(enterGole)} />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer :{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input :{
        borderWidth: 1, 
        padding: 5,
        width: '80%'
      }
})

export default GoalInput

