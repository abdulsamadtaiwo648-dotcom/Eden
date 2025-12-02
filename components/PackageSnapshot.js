import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PackageSnapshot = () => (
  <View style={styles.container}>
    <Text>Package Snapshot</Text>
    <Button title="Upload Photo" onPress={()=>alert("Upload Photo Clicked")}/>
  </View>
);

const styles = StyleSheet.create({
  container:{marginVertical:10, padding:10, borderWidth:1, borderColor:'#ccc'}
});

export default PackageSnapshot;
