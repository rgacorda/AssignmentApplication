import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


const AddAssignment = (props) => {
    const [assign, setAssign] = useState();

    const handleAddAssign = (value) => {
        // set assign to null 
        props.addAssign(value);
        setAssign(null);
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TextInput style={styles.inputField} value={assign} onChangeText={text => setAssign(text)} placeholder={'Add assignment'} placeholderTextColor={'#fff'}/>
        <TouchableOpacity onPress={() => handleAddAssign(assign)}>
          <View style={styles.button}>
            {/* + icon */}
              <AntDesign name="plus" size={24} color="black" /> 
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

export default AddAssignment

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#544A4C',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
        marginLeft: 10,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
});