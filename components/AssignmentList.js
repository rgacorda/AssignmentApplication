import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import AssignmentItem from './AssignmentItem';

export default function AssignmentList({ assignments, updateAssignment, deleteAssignment }) {
  
  const unmarkedAssignmentsExist = assignments.some(item => !item.completed);

  return(
      <ScrollView style={{
        height: 600
      }}>
        <View>
        {unmarkedAssignmentsExist ? (
          assignments.map((item) =>
            !item.completed ? (
              <AssignmentItem
                key={item.id}
                item={item}
                updateAssignment={updateAssignment}
                deleteAssignment={deleteAssignment}
              />
            ) : null
          )
        ) : (
          <Text style={{ textAlign: 'center', fontSize: 20, marginHorizontal: 20, marginBottom: 40, }}>
            No assignments yet. Create one?
          </Text>
        )}
        </View>
      </ScrollView>
  );
}