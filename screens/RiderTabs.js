import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryList from '../components/DeliveryList';
import RiderPerformance from '../components/RiderPerformance';
import LiveChat from '../components/LiveChat';

const Tab = createBottomTabNavigator();

const RiderTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Deliveries" component={DeliveryList} />
      <Tab.Screen name="Performance" component={RiderPerformance} />
      <Tab.Screen name="Chat" component={LiveChat} />
    </Tab.Navigator>
  );
};

export default RiderTabs;
