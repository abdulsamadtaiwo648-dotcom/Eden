import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LiveChat = () => (
  <View style={styles.container}>
    <Text>Live Chat</Text>
    <Button title="Open Chat" onPress={()=>alert("Chat Clicked")}/>
  </View>
);

const styles = StyleSheet.create({
  container:{marginVertical:10, padding:10, borderWidth:1, borderColor:'#ccc'}
});

export default LiveChat;
