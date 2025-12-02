import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import PersonalTabs from './screens/PersonalTabs';
import BusinessTabs from './screens/BusinessTabs';
import RiderTabs from './screens/RiderTabs';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <LoginScreen setUser={setUser} />;

  let DashboardTabs;
  switch(user.role) {
    case "personal":
      DashboardTabs = PersonalTabs;
      break;
    case "business":
      DashboardTabs = BusinessTabs;
      break;
    case "rider":
      DashboardTabs = RiderTabs;
      break;
    default:
      return <LoginScreen setUser={setUser} />;
  }

  return (
    <NavigationContainer>
      <DashboardTabs />
    </NavigationContainer>
  );
}
