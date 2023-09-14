import React from 'react';
import { Modal, ScrollView, Text, View , TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AssignmentItem from './AssignmentItem';

export default function CompletedAssignmentsModal( { deleteAssignment, showCompletedModal, setShowCompletedModal, assignment, displayAssignment , setShowModal} ) {
  return(
    <Modal
        visible={showCompletedModal}
        animationType='slide'
        onRequestClose={() => setShowCompletedModal(false)}
      >
        <View >
        <View style={{ paddingVertical: 40, paddingHorizontal: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
          <TouchableOpacity onPress={() => {setShowCompletedModal(true)}}  >
            <Feather name="check-square" size={24} color="black" />
          </TouchableOpacity>

          <Text style={{ fontWeight:'bold', fontSize:32, }}>Completed</Text>

          <TouchableOpacity onPress={() => {setShowModal(true)}} >
            <Ionicons name="add-outline" size={24} color="black" />
          </TouchableOpacity>
          {/* <Text>{assignment.length.toString()}</Text> */}
        </View>
          <ScrollView>
            <View >
            {assignment.map(item => item.completed ? (
            <AssignmentItem
              key={item.id}
              item={item}
              displayAssignment= {displayAssignment(item)}
              deleteAssignment={deleteAssignment}
            />
          ) : 
            null
          )}
            </View>
          </ScrollView>
        </View>
      </Modal>
  );
}