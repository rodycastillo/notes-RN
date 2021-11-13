import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const  DrawerNavigation  = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" options={{ title:"Notes" }} component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
