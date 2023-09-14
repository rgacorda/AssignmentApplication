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
          <Text style={{ fontWeight:'bold', fontSize:24 }}>ADD ASSIGNMENT</Text>
        </View>
        
        <View>
          <View >
            <TextInput
              style={{
                shadowColor: 'black', // Shadow color for iOS
                shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
                shadowOpacity: 0.2, // Shadow opacity for iOS
                shadowRadius: 2, // Shadow radius for iOS
                elevation: 2, // For Android
                borderRadius: 5,
                padding: 10,
                marginHorizontal: 20,
                marginVertical: 10,
                backgroundColor: '#ebf1ff',
              }}
              placeholder='Title'
              value={newAssignment.title.toString()}
              onChangeText={(title) => {handleChange('title', title)}}
              
            ></TextInput>
            <TextInput
              style={{
                shadowColor: 'black', // Shadow color for iOS
                shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
                shadowOpacity: 0.2, // Shadow opacity for iOS
                shadowRadius: 2, // Shadow radius for iOS
                elevation: 2, // For Android
                borderRadius: 5,
                padding: 10,
                marginHorizontal: 20,
                marginVertical: 10,
                backgroundColor: '#ebf1ff',
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
                // borderWidth: 1,
                padding: 10,
                width: 100,
                borderRadius: 3,
                backgroundColor: '#6bf236', // Add a background color for the shadow to be visible
                shadowColor: 'black', // Shadow color for iOS
                shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
                shadowOpacity: 0.2, // Shadow opacity for iOS
                shadowRadius: 2, // Shadow radius for iOS
                elevation: 2, // For Android
              }}
            >
              <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Add</Text>
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
                  // borderWidth: 1,
                  padding: 10,
                  width: 100,
                  borderRadius: 3,
                  backgroundColor: 'white', // Add a background color for the shadow to be visible
                  shadowColor: 'black', // Shadow color for iOS
                  shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
                  shadowOpacity: 0.2, // Shadow opacity for iOS
                  shadowRadius: 2, // Shadow radius for iOS
                  elevation: 2, // For Android
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