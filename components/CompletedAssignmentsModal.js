import React from 'react';
import { ScrollView, View, Modal, Text } from 'react-native';

const CompletedAssignmentsModal = ({ showCompletedModal, setShowCompletedModal, assignment, displayAssignment }) => {
  return (
    <Modal
      visible={showCompletedModal}
      animationType='slide'
      onRequestClose={() => setShowCompletedModal(false)}
    >
      <View >
          <View >
         <Text >Completed Assignments</Text>

          </View>
          <ScrollView>
            <View>
              {assignment.map(item => item.completed ? displayAssignment(item) : null)}
            </View>
         </ScrollView>
        </View>
    </Modal>
  );
};

export default CompletedAssignmentsModal;
