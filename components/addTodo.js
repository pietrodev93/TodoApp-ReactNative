import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({submitHandler, text, setText }){

    

    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View>
            <TextInput 
                value={text}
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})