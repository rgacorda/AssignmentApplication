// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, ScrollView, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Components
// import CheckBox from './components/CheckBox';

// export default function App() {
//   const initialState = {
//     id: 0,
//     title: '',
//     description: '',
//     completed: false,
//   }
  
//   const clear = () => {
//     setNewAssignment(initialState);
//   }

//   const getAssignments = async () => {
//     const assignments = await AsyncStorage.getItem('assignment')
//     console.log(assignments);
//     setAssignment(JSON.parse(assignments) ? JSON.parse(assignments) : []);
//   }
//   useEffect(() => {
//     getAssignments();
//   }, []);

//   const [showModal, setShowModal] = useState(false);
//   const [showCompletedModal, setShowCompletedModal] = useState(false);
//   const [newAssignment, setNewAssignment] = useState(initialState);
//   const [assignment, setAssignment] = useState([]);


//   const addAssignment = () => {
//     if (!newAssignment.title || !newAssignment.description) {
//       alert("Please fill all fields.");
//       return;
//     }
//     newAssignment.id = assignment.length + 1;
//     const updatedAssignment = [newAssignment, ...assignment];
//     setAssignment(updatedAssignment);
//     AsyncStorage.setItem("assignment", JSON.stringify(updatedAssignment));
//     setShowModal(false);
//     clear();
//   }

//   const updateAssignment = (itemToBeUpdated) => {
//     const updatedAssignments = assignment.map((assignmentItem) =>
//       assignmentItem.id === itemToBeUpdated.id
//         ? { ...assignmentItem, completed: !assignmentItem.completed }
//         : assignmentItem
//     );
  
//     setAssignment(updatedAssignments);
//     AsyncStorage.setItem('assignment', JSON.stringify(updatedAssignments));
//   };

//   const deleteAssignment = (id) => {
//     const updatedAssignments = assignment.filter((assignmentItem) => assignmentItem.id !== id);
//     setAssignment(updatedAssignments);
//     AsyncStorage.setItem('assignment', JSON.stringify(updatedAssignments));
//   };

//   const handleChange = (title, value) => setNewAssignment({...newAssignment, [title]: value});

//   const displayAssignment = (item) => (
//     <View key={item.id}>
//       <TouchableOpacity
//         style={styles.assignmentItem}
//         onPress={() =>
//           Alert.alert(`${item.title}`, `${item.description}`, [
//             {
//               text: item.completed ? 'Mark InProgress' : 'Mark Completed',
//               onPress: () => updateAssignment(item),
//             },
//             {
//               text: 'No',
//               style: 'cancel',
//             },
//           ])
//         }
//       >
//         <View style={
//           {
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',

//           }
//         }> 
//           <CheckBox
//             isChecked={item.completed ? item.completed : null}
//             onChange={() => updateAssignment(item)}
//             title={item.title}
//             desc={item.description}
//           />
//           {/* display assignment */}
//           <Text style={{ marginLeft: 10,color: '#fff', textDecorationLine: item.completed ? 'line-through' : 'none' }}>
//             {item.title}
//           </Text>
//           {/* <Text style={{textDecorationLine: item.completed ? 'line-through' : 'none'}}>{item.title}</Text> */}
//         </View>
        


//         <TouchableOpacity onPress={() =>
//           Alert.alert(`${item.title}`, `${item.description}`, [
//             {
//               text: item.completed ? 'Delete Uncompleted' : 'Delete Completed',
//               onPress: () => deleteAssignment(item.id),
//             },
//             {
//               text: 'No',
//               style: 'cancel',
//             },
//           ])
//         }
//       >
//       <Text style={{color: '#d41d6d'}}>Delete</Text>
//     </TouchableOpacity>
//       </TouchableOpacity>
    
//     {/* <Text>{item.description}</Text> */}
   
//     </View>
//   )

//   return (
//     <View style={styles.container}>
//       <View>
//         <View style={styles.assignmentCountContainer}>
//           <TouchableOpacity 
//             onPress={() => {setShowCompletedModal(true)}}
//           >
//             <Entypo name="menu" size={24} color="black" />
//           </TouchableOpacity>

//           <Text style={styles.assignmentCountLabel}>Assignments</Text>
//           <Text style={styles.assignmentCount}>{assignment.length.toString()}</Text>
//         </View>
        
//         {/* Assignment Items */}
//         <ScrollView>
//           <View>
//             {
//               assignment.map(item => !item.completed ? displayAssignment(item) : null)
//             }
//           </View>
//         </ScrollView>

        
//         <TouchableOpacity 
//           style={styles.addAssignmentButtonContainer}
//           onPress={() => {setShowModal(true)}}
//         >
//           <Ionicons name="add-outline" size={24} color="white" />
//         </TouchableOpacity>

        
//         <StatusBar style="auto" />
//       </View>

//       {/* Add Assignment */}
//       <Modal
//         visible={showModal}
//         animationType='slide'
//         onRequestClose={() => {setShowModal(false)}}
//       >

//         <View style={styles.addAssignmentModalContainer}>
//           <Text style={styles.addAssignmentlTitle}>Add Assignment</Text>
//         </View>

//         <View>
//           <View style={styles.addAssignmentInputContainer}>
//             <TextInput
//               placeholder='Title'
//               value={newAssignment.title.toString()}
//               onChangeText={(title) => {handleChange('title', title)}}
//               style={styles.addAssignmentlInput}
//             ></TextInput>
//             <TextInput
//               placeholder='Description'
//               value={newAssignment.description.toString()}
//               onChangeText={(desc) => {handleChange('description', desc)}}
//               style={styles.addAssignmentlInput}
//               multiline={true}
//               numberOfLines={6}
//             ></TextInput>
//           </View>
//           <View style={styles.addAssignmentlBtnContainer}>
//             <View>
//             <TouchableOpacity onPress={addAssignment}>
//               <Text style={styles.addAssignmentlBtn}>Add</Text>
//             </TouchableOpacity>
//             </View>
//             <View>
//             <TouchableOpacity onPress={() => {setShowModal(false); clear()}}>
//               <Text style={styles.addAssignmentlBtn}>Cancel</Text>
//             </TouchableOpacity>
//             </View>
//           </View>
//         </View>

//       </Modal>
//       {/* Completed Assignment */}
//       <Modal
//         visible={showCompletedModal}
//         animationType='slide'
//         onRequestClose={() => setShowCompletedModal(false)}
//       >
//         <View style={styles.completedAssignmentsModalContainer}>
//           <View style={styles.addAssignmentModalContainer}>
//           <Text style={styles.addAssignmentlTitle}>Completed Assignments</Text>

//           </View>
//           <ScrollView>
//             <View>
//               {assignment.map(item => item.completed ? displayAssignment(item) : null)}
//             </View>
//           </ScrollView>
//         </View>
//       </Modal>

//     </View>
//   );
// }



import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Modal, TextInput, ScrollView, Alert, StyleSheet, StatusBar, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AssignmentList from './components/AssignmentList';
import AddAssignmentModal from './components/AddAssignmentModal';
import CompletedAssignmentsModal from './components/CompletedAssignmentsModal';
import CheckBox from './components/CheckBox';

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
    
      const getAssignments = async () => {
        const assignments = await AsyncStorage.getItem('assignment')
        console.log(assignments);
        setAssignment(JSON.parse(assignments) ? JSON.parse(assignments) : []);
      }
      useEffect(() => {
        getAssignments();
      }, []);
    
      const [showModal, setShowModal] = useState(false);
      const [showCompletedModal, setShowCompletedModal] = useState(false);
      const [newAssignment, setNewAssignment] = useState(initialState);
      const [assignment, setAssignment] = useState([]);
    
    
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
        <View key={item.id}>
          <TouchableOpacity
            style={styles.assignmentItem}
            onPress={() =>
              Alert.alert(`${item.title}`, `${item.description}`, [
                {
                  text: item.completed ? 'Mark InProgress' : 'Mark Completed',
                  onPress: () => updateAssignment(item),
                },
                {
                  text: 'No',
                  style: 'cancel',
                },
              ])
            }
          >
            <View style={
              {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
    
              }
            }> 
              <CheckBox
                isChecked={item.completed ? item.completed : null}
                onChange={() => updateAssignment(item)}
                title={item.title}
                desc={item.description}
              />
              {/* display assignment */}
              <Text style={{ marginLeft: 10,color: '#fff', textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                {item.title}
              </Text>
              {/* <Text style={{textDecorationLine: item.completed ? 'line-through' : 'none'}}>{item.title}</Text> */}
            </View>
            
    
    
            <TouchableOpacity onPress={() =>
              Alert.alert(`${item.title}`, `${item.description}`, [
                {
                  text: item.completed ? 'Delete Uncompleted' : 'Delete Completed',
                  onPress: () => deleteAssignment(item.id),
                },
                {
                  text: 'No',
                  style: 'cancel',
                },
              ])
            }
          >
          <Text style={{color: '#d41d6d'}}>Delete</Text>
        </TouchableOpacity>
          </TouchableOpacity>
        
        {/* <Text>{item.description}</Text> */}
       
        </View>
      )
    

  return (
    <View style={styles.container}>
      {/* Assignment List */}
      <AssignmentList
        assignment={assignment}
        updateAssignment={updateAssignment}
        deleteAssignment={deleteAssignment}
      />

      {/* Add Assignment Modal */}
      <AddAssignmentModal
        showModal={showModal}
        setShowModal={setShowModal}
        newAssignment={newAssignment}
        clear={clear}
        handleChange={handleChange}
        addAssignment={addAssignment}
      />

      {/* Completed Assignments Modal */}
      <CompletedAssignmentsModal
        showCompletedModal={showCompletedModal}
        setShowCompletedModal={setShowCompletedModal}
        assignment={assignment}
        displayAssignment={displayAssignment}
      />

      <StatusBar style="auto" />
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
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  assignmentCountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderRadius: 7,
    backgroundColor: '#8fb3ff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 40,
  },
  assignmentCount: {
    fontSize: 22,
    marginRight: 10,
  },
  assignmentCountLabel: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  addAssignmentButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'between',
    marginHorizontal: 20,
    marginVertical: 7,
    paddingVertical: 3,
    borderRadius: 7,
    backgroundColor: '#a6e783',
  },
  addAssignmentModalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 7,
    marginBottom: 40,
    paddingVertical: 3,
    borderWidth: 2,
  },
  addAssignmentlTitle: {
    textAlign: 'center',
    fontSize: 16,
  },
  addAssignmentInputContainer: {
    // marginBottom: 40,
  },
  addAssignmentlInput: {
    textAlign: 'left',
    fontSize: 12,
    backgroundColor: 'gray',
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  
  addAssignmentlBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  addAssignmentlBtn: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 100,
    textAlign: 'center',
    marginTop: 40,

  },
  assignmentItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderRadius: 7,
    backgroundColor: '#8fb3ff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  }
  
});