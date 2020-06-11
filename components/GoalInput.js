import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoalHandler = ()=>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible} animationTyoe="slide">
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput placeholder="Add a Task"
                           style={{marginBottom: 10, borderColor: 'black', borderWidth: 1, padding: 10, width: '80%'}}
                           onChangeText={goalInputHandler} value={enteredGoal}/>
                           <View style={{flexDirection: 'row', justifyContent: 'space-around',width: '50%'}}>
                <View style={styles.button}><Button title='Add' onPress={addGoalHandler}/></View>
                <View style={styles.button}><Button title="Cancel" color="red" onPress={props.onCancel}/></View></View>
            </View></Modal>
    );
};
const styles = StyleSheet.create({
    button: {
        width: 80
    }});


export default GoalInput;