import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryScheduler from '../components/DeliveryScheduler';
import DeliveryList from '../components/DeliveryList';
import PackageSnapshot from '../components/PackageSnapshot';
import LiveChat from '../components/LiveChat';

const Tab = createBottomTabNavigator();

const PersonalTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Schedule" component={DeliveryScheduler} />
      <Tab.Screen name="My Deliveries" component={DeliveryList} />
      <Tab.Screen name="Snapshot" component={PackageSnapshot} />
      <Tab.Screen name="Chat" component={LiveChat} />
    </Tab.Navigator>
  );
};

export default PersonalTabs;
