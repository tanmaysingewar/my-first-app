import React,{useState} from 'react'
import { View, TextInput, StyleSheet , Button, Modal } from 'react-native'
const GoalInput = (props) => {

  const [enterGole, setEnterGole] = useState('')

  const handleChange = (text)=>{
    setEnterGole(text)
  }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View  style={styles.inputContainer}>
          <TextInput placeholder="Cource Gole" style={styles.input} onChangeText={handleChange} value={enterGole} />
          <View style={styles.buttonContainer} >
            <View style={styles.button} > 
                <Button title='Cancle'  color='red' onPress={props.onCancle} />
            </View>
            <View style={styles.button}>
                <Button title="Add" color='orange' onPress={() => {props.onAddGole(enterGole), setEnterGole('')} } />
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer :{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      input :{
        borderWidth: 1, 
        padding: 5,
        width: '80%',
        padding : 5,
        marginBottom: 10
      },
      buttonContainer :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '50%'
      },
      button :{
        width : '40%',
        marginTop : 10,
        color : 'orange'
      }
})

export default GoalInput

