import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { EmptyPage } from '../screens';
import { GetStartedScreen } from '../screens';

import { rootScreens } from './types';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={rootScreens.GetStarted}
        component={GetStartedScreen}
      />
      <Tab.Screen name={rootScreens.Home} component={EmptyPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
