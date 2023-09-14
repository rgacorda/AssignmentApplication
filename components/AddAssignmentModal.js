import React from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddAssignmentModal( { showModal, setShowModal, newAssignment, handleChange, addAssignment, clear } ) {
  return(
    <Modal
        visible={showModal}
        animationType='slide'
        onRequestClose={() => {setShowModal(false)}}
      >

        <View >
          <Text>Add Assignment</Text>
        </View>

        <View>
          <View >
            <TextInput
              placeholder='Title'
              value={newAssignment.title.toString()}
              onChangeText={(title) => {handleChange('title', title)}}
              
            ></TextInput>
            <TextInput
              placeholder='Description'
              value={newAssignment.description.toString()}
              onChangeText={(desc) => {handleChange('description', desc)}}
              
              multiline={true}
              numberOfLines={6}
            ></TextInput>
          </View>
          <View >
            <View>
            <TouchableOpacity onPress={addAssignment}>
              <Text >Add</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={() => {setShowModal(false); clear()}}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal>
  );
}