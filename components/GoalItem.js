import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

const GoalItem =(props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
        
        <View style={styles.listItem} > 
        <Text >{props.title}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem : {
        padding : 10,
        backgroundColor : '#ccc',
        borderWidth : 1,
        marginVertical: 10
      }
})

export default GoalItem
