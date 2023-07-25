import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CommonCard = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonCard;
