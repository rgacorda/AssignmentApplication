
import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';

// components
import AddAssignment from './components/AddAssignment';
import AssignmentItem from './components/AssignmentItem';
import Check from './components/Check';

// Main Component
export default function App() {
  const [assign, setAssign] = useState([]);

  // add and delete assignment
  const addAssign = (newAssign) => {
    // if assign is null return nothing
    if (assign === null || assign === "") return; // fix if statement
    setAssign([...assign, newAssign]); // store new array element inside the array called assign
    Keyboard.dismiss();
  }

  const deleteAssign = (deleteIndex) => {
    // if assign is null return nothing
    Alert.alert(
          'Delete Assignment',
          'Do you want to delete this assignment?',
          [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {
              text: 'Delete',
              onPress: () => {
                setAssign(assign.filter((value, index) => index != deleteIndex));
                Alert.alert("Assignment Deleted");
              },
              style: 'destructive',
            },
          ],
        );

  }



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ASSIGNMENT APP</Text>
      <ScrollView sytle={styles.scrollView}>
      {/* 
        This array map renders an AssignmentItem taken from the AddAssignment input box 
      */}
      {
        assign.length === 0 ? <Text style={styles.assignmentText}>No assignments yet. Create one?</Text> : (
        assign.map((assign, index) => {
          return (
            <View key={index} style={styles.assignContainer}>
              <AssignmentItem index={index + 1} assign={assign} deleteAssign={() => deleteAssign(index)}/>
            </View>
          );
        })
        )
      }
      </ScrollView>
      <AddAssignment addAssign={addAssign}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    color: '#544A4C',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  assignContainer: {
    marginTop: 20,
  },
  assignmentText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 30,
  },
});
