import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalScreen from '../screens/JournalScreen';
import RoutinesScreen from '../screens/RoutinesScreen';
import ProfilScreen from '../screens/ProfilScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen 
        name="Routines" 
        component={RoutinesScreen} 
        options={{ title: 'Mes routines' }} 
      />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
}