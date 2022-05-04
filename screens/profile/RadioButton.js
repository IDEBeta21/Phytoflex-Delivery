import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RadioButton({ data, onSelect }) {

const [userOption, setUserOption] = useState(null);
const selectHandler = (value) => {
  onSelect(value);
  setUserOption(value);
};

  return (
    <View>
      {data.map((item) => {
        return(
            <TouchableOpacity
                style={
                    item.value === userOption ? styles.selected : styles.unselected
                }  
                onPress={() => selectHandler(item.value)}>
                <Text style={styles.option}> {item.value} </Text>
            </TouchableOpacity>
        ); 
      })}
    </View>
  );
}

const styles = StyleSheet.create({
option: {
        color: '#1D4123', 
        fontSize: 17, 
        fontFamily: 'poppins-regular', 
        padding: 4, 
        textAlign: 'left', 
        paddingStart: 16, 
        paddingEnd: 108,
        margin: 2,
    },
unselected: {
    backgroundColor: 'transparent',
  },
selected: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
})