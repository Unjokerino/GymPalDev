import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { EmptyPage } from "../screens";

import { rootScreens } from "./types";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={rootScreens.Home} component={EmptyPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
