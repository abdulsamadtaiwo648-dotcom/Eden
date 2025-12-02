import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AssignedRider = () => (
  <View style={styles.container}>
    <Text>Assign Rider</Text>
    <Button title="Assign Now" onPress={()=>alert("Assign Rider Clicked")}/>
  </View>
);

const styles = StyleSheet.create({
  container:{marginVertical:10, padding:10, borderWidth:1, borderColor:'#ccc'}
});

export default AssignedRider;
