import React from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddAssignmentModal( { setShowCompletedModal, showModal, setShowModal, newAssignment, handleChange, addAssignment, clear } ) {
  return(
    <Modal
        visible={showModal}
        animationType='slide'
        onRequestClose={() => {setShowModal(false)}}
      >

        <View style={{ paddingVertical: 30, paddingHorizontal: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ fontWeight:'bold', fontSize:32 }}>Add Assignment</Text>
        </View>
        
        <View>
          <View >
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 5,
                padding: 10,
                marginHorizontal: 20,
                marginVertical: 10,
              }}
              placeholder='Title'
              value={newAssignment.title.toString()}
              onChangeText={(title) => {handleChange('title', title)}}
              
            ></TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 5,
                padding: 10,
                marginHorizontal: 20,
                marginVertical: 10,
              }}
              placeholder='Description'
              value={newAssignment.description.toString()}
              onChangeText={(desc) => {handleChange('description', desc)}}
              
              multiline={true}
              numberOfLines={6}
            ></TextInput>
          </View>

          <View 
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              // borderWidth: 2,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <TouchableOpacity onPress={addAssignment}>
            <View
              style={{
                borderWidth: 2,
                padding: 10,
                width: 100,
                borderRadius: 3,
              }}
            >
            
              <Text style={{ textAlign: 'center' }}>Add</Text>
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setShowModal(false); clear();
              if (!setShowCompletedModal()) {
                setShowCompletedModal(false);
              }  
            }}>
            <View
               style={{
                borderWidth: 2,
                padding: 10,
                width: 100,
                borderRadius: 3,
              }}
            >
            
              <Text style={{ textAlign: 'center' }}>Cancel</Text>
            
            </View>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>
  );
}