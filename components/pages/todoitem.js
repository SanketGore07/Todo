import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({ item, pressHandler }){
    return(
         <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.items}>
                <MaterialIcons name='delete' size={18} color='#333' />
                <Text>{item.name}</Text>
            </View>

        </TouchableOpacity> 

    )

}

const styles = StyleSheet.create({
    items:{
        paddingTop:8,
        flexDirection:'row',
        backgroundColor:'#bbb',
        paddingBottom:10,
        borderRadius: 10,
        marginTop:16,
        fontSize: 20,
        fontWeight:'bold',
        justifyContent:'space-around'
    }
})