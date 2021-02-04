import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My To Dos</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        height:45,
        width: "100%",
        borderTopEndRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor:'coral',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        
    }

});