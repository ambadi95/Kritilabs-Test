import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const AboutPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About</Text>
      <Text style={styles.para}>
        This app is developed in React Native, all rights reserved, A mobile app
        is an application that is designed only for mobile devices. The app can
        be used on mobile devices and tablets etc. devices. A mobile app can be
        said to be a mobile version of a website. Mobile has a small screen and
        mobile apps are built to organize content according to that screen.
        Mobile apps are very popular in today's time. Every website has to make
        its own mobile app because, without it, it will not work. Mobile has
        become the need of every person today. Due to being with every person,
        the mobile app is also very much in vogue. This is the reason why mobile
        apps have become very popular. Online shopping, listening to songs,
        making payments, buying movie tickets, transferring money to banks,
        reading books, playing games, reading news, etc. can be done through the
        mobile app.
      </Text>
    </View>
  );
};

export default AboutPage;
