import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {SCREENS} from '../../utils/Constant';
import {Images} from '../../utils/Images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    let timerId = setTimeout(() => {
      navigation.replace(SCREENS.LOGINPAGE);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Images.logo} />
    </View>
  );
};

export default SplashScreen;
