import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function Check() {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Checkbox
                      style={styles.checkbox}
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? '#544A4C' : undefined}
                    />
        </View>
      );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    checkbox: {
        backgroundColor: '#544A4C',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,

    },

})