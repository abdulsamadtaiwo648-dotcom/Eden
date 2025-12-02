import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DeliveryScheduler = () => (
  <View style={styles.container}>
    <Text>Schedule a Delivery</Text>
    <Button title="Schedule Now" onPress={()=>alert("Schedule Delivery Clicked")}/>
  </View>
);

const styles = StyleSheet.create({
  container:{marginVertical:10, padding:10, borderWidth:1, borderColor:'#ccc'}
});

export default DeliveryScheduler;
