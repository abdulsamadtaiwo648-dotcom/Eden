// App.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// Dummy dashboards
const PersonalDashboard = () => <Text>Personal Dashboard</Text>;
const BusinessDashboard = () => <Text>Business Dashboard</Text>;
const RiderDashboard = () => <Text>Rider Dashboard</Text>;

const LoginScreen = ({ setUser }) => (
  <View>
    <Text>Login Screen</Text>
    <Button title="Login as Personal" onPress={() => setUser({role:'personal'})} />
    <Button title="Login as Business" onPress={() => setUser({role:'business'})} />
    <Button title="Login as Rider" onPress={() => setUser({role:'rider'})} />
  </View>
);

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <LoginScreen setUser={setUser} />;

  // Role-based dashboard rendering
  switch(user.role) {
    case "personal":
      return <PersonalDashboard />;
    case "business":
      return <BusinessDashboard />;
    case "rider":
      return <RiderDashboard />;
    default:
      return <LoginScreen setUser={setUser} />;
  }
}
