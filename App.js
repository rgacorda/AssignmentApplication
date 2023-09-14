import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import AssignmentItem from './components/AssignmentItem';
import AssignmentList from './components/AssignmentList';
import AddAssignmentModal from './components/AddAssignmentModal';
import CompletedAssignmentsModal from './components/CompletedAssignmentsModal';

export default function App() {
  const initialState = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  }
  
  const clear = () => {
    setNewAssignment(initialState);
  }

  const [showModal, setShowModal] = useState(false);
  const [showCompletedModal, setShowCompletedModal] = useState(false);
  const [newAssignment, setNewAssignment] = useState(initialState);
  const [assignment, setAssignment] = useState([]);

  const getAssignments = async () => {
    const assignments = await AsyncStorage.getItem('assignment')
    console.log(assignments);
    setAssignment(JSON.parse(assignments) ? JSON.parse(assignments) : []);
  }
  useEffect(() => {
    getAssignments();
  }, []);

  const addAssignment = () => {
    if (!newAssignment.title || !newAssignment.description) {
      alert("Please fill all fields.");
      return;
    }
    newAssignment.id = assignment.length + 1;
    const updatedAssignment = [newAssignment, ...assignment];
    setAssignment(updatedAssignment);
    AsyncStorage.setItem("assignment", JSON.stringify(updatedAssignment));
    setShowModal(false);
    setShowCompletedModal(false);
    clear();
  }

  const updateAssignment = (itemToBeUpdated) => {
    const updatedAssignments = assignment.map((assignmentItem) =>
      assignmentItem.id === itemToBeUpdated.id
        ? { ...assignmentItem, completed: !assignmentItem.completed }
        : assignmentItem
    );
  
    setAssignment(updatedAssignments);
    AsyncStorage.setItem('assignment', JSON.stringify(updatedAssignments));
  };

  const deleteAssignment = (id) => {
    const updatedAssignments = assignment.filter((assignmentItem) => assignmentItem.id !== id);
    setAssignment(updatedAssignments);
    AsyncStorage.setItem('assignment', JSON.stringify(updatedAssignments));
  };

  const handleChange = (title, value) => setNewAssignment({...newAssignment, [title]: value});

  const displayAssignment = (item) => (
    <AssignmentItem item={item} updateAssignment={updateAssignment} deleteAssignment={deleteAssignment} />
  )

  return (
    // Main container
    <View >

      {/* Assignment list, completed btn, add btn */}
      <View style={{ marginTop: 10, }}>
        {/* Header */}
        <View style={{ paddingVertical: 40, paddingHorizontal: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
          <TouchableOpacity 
            style={{
              padding: 5,
              borderRadius: 3,
              backgroundColor: 'white', // Add a background color
              shadowColor: 'black', // Shadow color
              shadowOffset: { width: 0, height: 2 }, // Shadow offset
              shadowOpacity: 0.2, // Shadow opacity
              shadowRadius: 2, // Shadow radius
              elevation: 2, // For Android
            }}
            onPress={() => {setShowCompletedModal(true)}} 
          >
            <Feather name="check-square" size={24} color="black" />
          </TouchableOpacity>

          <Text style={{ fontWeight:'bold', fontSize:24, }}>ASSIGNEMNT APP</Text>

          <TouchableOpacity 
            style={{
              padding: 5,
              borderRadius: 3,
              backgroundColor: 'white', // Add a background color
              shadowColor: 'black', // Shadow color
              shadowOffset: { width: 0, height: 2 }, // Shadow offset
              shadowOpacity: 0.2, // Shadow opacity
              shadowRadius: 2, // Shadow radius
              elevation: 2, // For Android
            }}
            onPress={() => {setShowModal(true)}} 
            
          >
            <Ionicons name="add-outline" size={24} color="black" />
          </TouchableOpacity>
          {/* <Text>{assignment.length.toString()}</Text> */}
        </View>
        
        {/* Assignment Items */}
        
        <AssignmentList
        assignments={assignment}
        updateAssignment={updateAssignment}
        deleteAssignment={deleteAssignment}
        />

        
        <TouchableOpacity 
          style={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderRadius: 3,
            marginTop: 5,
            backgroundColor: 'white', // Add a background color
            shadowColor: 'black', // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.2, // Shadow opacity
            shadowRadius: 2, // Shadow radius
            elevation: 2, // For Android
          }}
          onPress={() => {setShowModal(true)}}
        >
          <Ionicons name="add-outline" size={32} color="black" />
        </TouchableOpacity>

        
        <StatusBar style="auto" />
      </View>

      {/* Add Assignment */}
      <AddAssignmentModal
      showModal={showModal}
      setShowModal={setShowModal}
      setShowCompletedModal={setShowCompletedModal}
      newAssignment={newAssignment}
      handleChange={handleChange}
      addAssignment={addAssignment}
      clear={clear}
      />
      {/* Completed Assignment */}
      <CompletedAssignmentsModal
      showCompletedModal={showCompletedModal}
      setShowCompletedModal={setShowCompletedModal}
      assignment={assignment}
      displayAssignment={displayAssignment}
      setShowModal={setShowModal}
      item={assignment}
      deleteAssignment={deleteAssignment}
      updateAssignment={updateAssignment}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 50,
    // borderWidth: 2,
  },
 
});