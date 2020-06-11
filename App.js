import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

    const [courseGoals, setCourseGoals] = useState('');
    const [isAddMode, setIsAddMode] = useState(false);
    const cancelGoalHandler = ()=>{
        setIsAddMode(false)
    }
    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
        setIsAddMode(false)
    };
    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        })

    }
    return (
        <View style={styles.container}>
            <Button title="Add New Task" onPress={()=>setIsAddMode(true)}/>
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler}/>
            <FlatList keyExtractor={(item, index) => item.id} data={courseGoals}
                      renderItem={itemData => <GoalItem title={itemData.item.value} id={itemData.item.id}
                                                        onDelete={removeGoalHandler}/>}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 50
    }
});

