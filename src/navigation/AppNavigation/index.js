import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenNames from '../screenNames';
import {SCREENS} from '../../utils/Constant';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Group
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SCREENS.SPLASHSCREEN}
        component={screenNames.SplashScreen}
      />
      <Stack.Screen
        name={SCREENS.LOGINPAGE}
        component={screenNames.LoginPage}
      />
      <Stack.Screen
        name={SCREENS.FORGOTPASSWORD}
        component={screenNames.ForgotPassword}
      />

      <Stack.Screen
        name={SCREENS.HOMEPAGE}
        component={screenNames.HomeBottomNavigation}
      />
      <Stack.Screen
        name={SCREENS.DETAILSPAGE}
        component={screenNames.DetailsPage}
      />
    </Stack.Group>
  );
};

export default AppNavigation;
