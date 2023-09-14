import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CheckBox({ isChecked, onChange, title, desc }) {
    const [checked, setChecked] = useState(isChecked);
  
    useEffect(() => {
      setChecked(isChecked);
    }, [isChecked]);
  
    const toggleChecked = () => {
      Alert.alert(`${title}`, `${desc}`, [
        {
            text: checked ? 'Mark InProgress' : 'Mark Completed',
            onPress: () => {
              setChecked(!checked);
              if (onChange) {
                onChange(!checked);
              }
            },
        },
        {
          text: 'No',
          style: 'cancel',
        },
        
      ]);
    };

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={toggleChecked}
    >
      {checked && <FontAwesome name="check" size={15} color="#000" />}
    </Pressable>
  );
}


const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderWidth: 2,
  },
});