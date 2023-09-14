import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
export default function AssignmentList ({ assignment, updateAssignment, deleteAssignment, CheckBox }) {
    return (
      <ScrollView>
        {assignment.map(item => !item.completed ? (
          <TouchableOpacity
            key={item.id}
            
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
            <View> 
              <CheckBox
                isChecked={item.completed ? item.completed : null}
                onChange={() => updateAssignment(item)}
                title={item.title}
                desc={item.description}
              />
              {/* display assignment */}
              <Text style={{ marginLeft: 10,color: '#fff', textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                {item.title}
              </Text>
              {/* <Text style={{textDecorationLine: item.completed ? 'line-through' : 'none'}}>{item.title}</Text> */}
            </View>
            
    
    
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
          <Text style={{color: '#d41d6d'}}>Delete</Text>
        </TouchableOpacity>
          </TouchableOpacity>
        ) : null)}
      </ScrollView>
    );
  };
  