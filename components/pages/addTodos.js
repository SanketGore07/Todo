import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddToDos({submitHandler}){

    const[text, setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);

    }

    return(
        <View>
            <TextInput placeholder='add some task...'
              onChangeText={changeHandler} style={styles.input} />
            <Button onPress={()=>submitHandler(text)} title='add to list'/>
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom:5,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'ddd'
    }

});