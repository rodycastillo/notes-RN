import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Login } from '../screens/auth/Login';
import  DrawerNavigation from './DrawerNavigation';
import { Register } from '../screens/auth/Register';

export type RootStackParams ={
  Login: undefined,
  DrawerNavigation: undefined,
  Register: undefined
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={ Login } />
      <Stack.Screen name="Register" component={ Register } />
      <Stack.Screen name="DrawerNavigation" component={ DrawerNavigation } />
    </Stack.Navigator>
  );
}

export default StackNavigator;