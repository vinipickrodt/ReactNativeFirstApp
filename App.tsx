import React from 'react';
import { StyleSheet, Text, View, Button, DatePickerAndroid } from 'react-native';
import MyComponent from './MyComponent';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: "15%", height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: "50%", height: 50, backgroundColor: 'powderblue', alignContent: "center", alignItems: "center", flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 20, alignContent: "center", alignItems: "center", textAlignVertical: "center", textAlign: "center" }}>React Native!</Text>
        </View>
        <View style={{ width: "35%", height: 50, backgroundColor: 'steelblue', flex: 1, justifyContent: "center", alignItems: "center" }}>
          <MyComponent />
        </View>
      </View>

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
});
