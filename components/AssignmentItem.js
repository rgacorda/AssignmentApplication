import React from 'react';
import { Text, TouchableOpacity, Alert, View } from 'react-native';
import CheckBox from './CheckBox';
import { Feather } from '@expo/vector-icons';

export default function({ item, updateAssignment, deleteAssignment }) {
    return(
        <View
            style={{ 
                // borderWidth: 2,
                marginVertical: 5,
            }}
        >
            {/* whole row */}
            <TouchableOpacity key={item.id}
                style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 3,
                    backgroundColor: 'white', // Add a background color
                    shadowColor: 'black', // Shadow color
                    shadowOffset: { width: 0, height: 2 }, // Shadow offset
                    shadowOpacity: 0.2, // Shadow opacity
                    shadowRadius: 2, // Shadow radius
                    elevation: 2, // For Android
                }}
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
                    // borderWidth: 2,
                }
                }> 
                <CheckBox
                    isChecked={item.completed ? item.completed : null}
                    onChange={() => updateAssignment(item)}
                    title={item.title}
                    desc={item.description}
                />
                {/* display assignment title*/}
                <Text style={{ marginLeft: 10,color: '#000', textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                    {item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}
                </Text>
                
                </View>
                {/* delete button */}
                <TouchableOpacity 
                    onPress={() =>
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
                    style={{
                        backgroundColor: 'white', // Add a background color for the shadow to be visible
                        shadowColor: 'black', // Shadow color for iOS
                        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
                        shadowOpacity: 0.2, // Shadow opacity for iOS
                        shadowRadius: 2, // Shadow radius for iOS
                        elevation: 2, // For Android
                        padding:10,
                        borderRadius: 3,
                    }}
                >
                    <Feather name="trash" size={20} color='#ff595e' />
                </TouchableOpacity>


                
            </TouchableOpacity>
    
            {/* <Text>{item.description}</Text> */}
   
        </View>
    );
}