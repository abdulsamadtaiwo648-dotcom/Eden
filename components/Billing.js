import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Billing = () => (
  <View style={styles.container}>
    <Text>Monthly Billing</Text>
    <Button title="View Invoices" onPress={()=>alert("View Invoices Clicked")}/>
  </View>
);

const styles = StyleSheet.create({
  container:{marginVertical:10, padding:10, borderWidth:1, borderColor:'#ccc'}
});

export default Billing;
