import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BulkDelivery = () => (
  <View style={styles.container}>
    <Text>Bulk Delivery Upload</Text>
    <Button title="Upload CSV" onPress={()=>alert("Upload CSV Clicked")}/>
  </View>
);

const styles = StyleSheet.create({
  container:{marginVertical:10, padding:10, borderWidth:1, borderColor:'#ccc'}
});

export default BulkDelivery;
