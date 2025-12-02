import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ setUser }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eden Delivery App</Text>
      <Button title="Login as Personal" onPress={() => setUser({role:'personal'})} />
      <Button title="Login as Business" onPress={() => setUser({role:'business'})} />
      <Button title="Login as Rider" onPress={() => setUser({role:'rider'})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center'},
  title:{fontSize:24, marginBottom:20}
});

export default LoginScreen;
