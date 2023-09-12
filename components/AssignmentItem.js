import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import CheckBox from './CheckBox';

const AssignmentItem = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.indexContainer}>
            <CheckBox/>
        </View>
        <View style={styles.taskContainer}>
            <Text style={styles.task}>{props.assign.slice(0, 25) + (props.assign.length > 20 ? "..." : "")}</Text>
            <TouchableOpacity onPress={() => props.deleteAssign()}>
                <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff' />
            </TouchableOpacity>
        </View>
        </View>
    );
}
export default AssignmentItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#544A4C',
        borderRadius: 100,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#544A4C',
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 5,
    },
});