import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './src/navigation/NavigationService';
import AppStack from './src/navigation';

const App = () => {
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      ref={NavigationService.navigationRef}
      onReady={() => {
        routeNameRef.current =
          NavigationService.navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        // const previousRouteName = routeNameRef.current;
        const currentRouteName =
          NavigationService.navigationRef.current.getCurrentRoute().name;

        // if (previousRouteName !== currentRouteName) {
        //   await analytics().logScreenView({
        //     screen_name: currentRouteName,
        //     screen_class: currentRouteName,
        //   });
        // }
        routeNameRef.current = currentRouteName;
      }}>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
