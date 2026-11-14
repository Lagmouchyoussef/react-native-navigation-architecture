import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutLogScreen from '../screens/WorkoutLogScreen';
import RoutinesScreen from '../screens/RoutinesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="WorkoutLog"
        component={WorkoutLogScreen}
        options={{ title: 'Workout Log' }}
      />
      <Tab.Screen
        name="Routines"
        component={RoutinesScreen}
        options={{ title: 'My Routines' }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}