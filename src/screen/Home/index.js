import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {SCREENS, ServiceList} from '../../utils/Constant';
import CommonCard from '../../components/CommonCard';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Services </Text>
        <FlatList
          data={ServiceList}
          renderItem={({item}) => (
            <CommonCard
              title={item.title}
              onPress={() => {
                navigation.navigate(SCREENS.DETAILSPAGE, {
                  data: item,
                });
              }}
            />
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
