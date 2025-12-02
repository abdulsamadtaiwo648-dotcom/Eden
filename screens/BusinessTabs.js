import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryScheduler from '../components/DeliveryScheduler';
import BulkDelivery from '../components/BulkDelivery';
import DeliveryList from '../components/DeliveryList';
import PackageSnapshot from '../components/PackageSnapshot';
import LiveChat from '../components/LiveChat';
import Billing from '../components/Billing';
import AssignedRider from '../components/AssignedRider';

const Tab = createBottomTabNavigator();

const BusinessTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Schedule" component={DeliveryScheduler} />
      <Tab.Screen name="Bulk Upload" component={BulkDelivery} />
      <Tab.Screen name="Deliveries" component={DeliveryList} />
      <Tab.Screen name="Snapshot" component={PackageSnapshot} />
      <Tab.Screen name="Assign Rider" component={AssignedRider} />
      <Tab.Screen name="Billing" component={Billing} />
      <Tab.Screen name="Chat" component={LiveChat} />
    </Tab.Navigator>
  );
};

export default BusinessTabs;
