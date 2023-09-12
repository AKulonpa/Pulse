import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState ('')
  const result1 = (220 -num1)* 0.65
  const result2 = (220 -num1)* 0.85 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart rate limits</Text>
      <Text style={styles.text}>Enter age</Text>
      <TextInput
        keyboardType='numeric'
        value={num1}
        onChangeText={text => setNum1(text)}
        style={styles.textInput}
      />
      <Text style={styles.text}>Hr limits</Text>
      {num1 ? <Text>{result1.toFixed(0)}</Text> : null}
      {num1 ? <Text>{result2.toFixed(0)}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  header: {
    marginBottom: 30,
    fontSize: 24,
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8, 
    width: 50,
    height: 30,
  },
  text:{
    fontSize: 20,
  }
});
