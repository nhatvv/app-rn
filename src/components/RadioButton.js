import { useState } from "react";
import { View, Text,Pressable, StyleSheet,Modal } from 'react-native';

export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);
    
  return (
    <View style = {{ paddingRight: 20, paddingLeft: 10,}}>
    {data.map((item) => {
      return (
        <Pressable
      style={ 
        item.value === userOption ? styles.selected : styles.unselected
      } 
      onPress={() => setUserOption(item.value)}
    >
      {}
      <Text style={styles.option}> {item.value}</Text>
    </Pressable>
      );
    })}
    {/* <Text> User option: {userOption}</Text> */}
  </View>
  );

  
}

const styles = StyleSheet.create({
    option: {
      fontSize: 20,
      color: '#797979',
      textAlign: 'center',
      padding: 8,
    
    },
    unselected: {
      backgroundColor: '#BFBFBF',
      margin: 5,
    },
    selected: {
      backgroundColor: '#c8deff',
      margin: 5,
      borderRadius: 10,
    },
  });