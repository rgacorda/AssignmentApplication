import React from 'react';
import { Modal, ScrollView, Text, View , TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AssignmentItem from './AssignmentItem';

export default function CompletedAssignmentsModal( { updateAssignment, deleteAssignment, showCompletedModal, setShowCompletedModal, assignment, displayAssignment , setShowModal} ) {
  
  const completedAssignmentsExist = assignment.some((item) => item.completed);
  
  return(
    <Modal
        visible={showCompletedModal}
        animationType='slide'
        onRequestClose={() => setShowCompletedModal(false)}
      >
        <View >
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
            onPress={() => {setShowCompletedModal(false)}}  
          >
            <AntDesign name="back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={{ fontWeight:'bold', fontSize:24, }}>COMPLETED</Text>

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
            <Ionicons name="add-outline" size={24} color="#8fb3ff" />
          </TouchableOpacity>
          {/* <Text>{assignment.length.toString()}</Text> */}
        </View>
          <ScrollView style={{
            height: 600
          }}>
            <View >
              {completedAssignmentsExist ? (
                assignment.map(item => item.completed ? (
                  <AssignmentItem
                    key={item.id}
                    item={item}
                    displayAssignment={displayAssignment(item)}
                    deleteAssignment={deleteAssignment}
                    updateAssignment={updateAssignment}
                  />
                ) : null)
              ) : (
                <Text style={{ textAlign: 'center', fontSize: 20, marginHorizontal: 20, marginBottom: 40, }}>
                  No completed assignments yet.
                </Text>
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>
  );
}