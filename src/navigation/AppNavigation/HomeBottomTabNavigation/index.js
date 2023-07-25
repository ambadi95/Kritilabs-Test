import React, {Fragment} from 'react';
import {Dimensions, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SCREENS from '../../../utils/Constant';
import screenNames from '../../screenNames';
import colors from '../../../utils/Colors';

let {height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const HomeBottomNavigation = props => {
  return (
    <Fragment>
      <Tab.Navigator
        initialRouteName="Menu"
        screenOptions={({navigation}) => ({
          tabBarIconStyle: {zIndex: 100},
          tabBarStyle: {
            height: Platform.OS === 'ios' ? (height > 800 ? 80 : 60) : 70,
          },
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {fontSize: 14},
          navigation,
        })}>
        <Tab.Screen
          name="Menu"
          component={screenNames.HomePage}
          options={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: '#C4C4C4',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="About"
          component={screenNames.AboutPage}
          options={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: '#C4C4C4',
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
};

export default HomeBottomNavigation;
