import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/Constant';

import AppNavigation from './AppNavigation';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={SCREENS.SPLASHSCREEN}>
      {AppNavigation()}
    </Stack.Navigator>
  );
};

export default AppStack;
