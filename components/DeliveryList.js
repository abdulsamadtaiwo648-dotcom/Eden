import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeliveryList = ({ showStatusUpdate=false }) => (
  <View style={styles.container}>
    <Text>Delivery List</Text>
    {showStatusUpdate && <Button title="Mark as Delivered" onPress={()=>alert("Status Updated")}/>}
  </View>
);

const styles = StyleSheet.create({
  container:{marginVertical:10, padding:10, borderWidth:1, borderColor:'#ccc'}
});

export default DeliveryList;
