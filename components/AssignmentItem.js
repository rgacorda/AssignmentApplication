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
                    // borderWidth: 2,
                    marginHorizontal: 20,
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
                    {item.title}
                </Text>
                
                </View>
                {/* delete button */}
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
                    <Feather name="trash" size={20} color='#d41d6d' />
                </TouchableOpacity>


                
            </TouchableOpacity>
    
            {/* <Text>{item.description}</Text> */}
   
        </View>
    );
}