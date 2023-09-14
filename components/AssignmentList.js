import React from 'react';
import { ScrollView, View } from 'react-native';
import AssignmentItem from './AssignmentItem';

export default function AssignmentList({ assignments, updateAssignment, deleteAssignment }) {
  return(
      <ScrollView>
        <View>
          {assignments.map(item => !item.completed ? (
            <AssignmentItem
              key={item.id}
              item={item}
              updateAssignment={updateAssignment}
              deleteAssignment={deleteAssignment}
            />
          ) : null)}
        </View>
      </ScrollView>
  );
}