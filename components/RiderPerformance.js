import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RiderPerformance = () => (
  <View style={styles.container}>
    <Text>Rider Performance Metrics</Text>
    <Text>Completed Deliveries: 10</Text>
    <Text>Rating: 4.8/5</Text>
  </View>
);

const styles = StyleSheet.create({
  container:{marginVertical:10, padding:10, borderWidth:1, borderColor:'#ccc'}
});

export default RiderPerformance;
