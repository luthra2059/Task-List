import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TextInput placeholder="Add a Task"
                       style={{borderColor: 'black', borderWidth: 1, padding: 10, width: '80%'}}
                       onChangeText={goalInputHandler} value={enteredGoal}/>
            <Button title='Add' onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    )
}


export default GoalInput;