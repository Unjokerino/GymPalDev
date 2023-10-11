import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import GetStartedScreen from '../screens/GetStartedScreen';

import { RootStackParamList, rootScreens } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackInner = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <StackInner.Screen
        options={{
          headerShown: false,
        }}
        name="GetStarted"
        component={GetStartedScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={rootScreens.BottomTabs}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
