import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const DetailsPage = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>{route.params.data.title}</Text>
        <Text style={styles.para}>{route.params.data.discription}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsPage;
