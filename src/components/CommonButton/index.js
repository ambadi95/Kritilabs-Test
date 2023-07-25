import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../utils/Colors';

const CommonButton = props => {
  const {
    title,
    buttonStyle,
    onPress,
    isCaps = false,
    isPrimary = true,
    textStyle,
    disabled = false,
  } = props;
  const textColor = isPrimary ? colors.primary : colors.white;
  const bgColor = isPrimary ? colors.white : colors.primary;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          style.button,
          disabled ? style.fade : null,

          buttonStyle,
          {backgroundColor: bgColor},
        ]}>
        <Text
          style={[
            style.title,
            textStyle,
            isCaps ? style.caps : null,
            {color: textColor},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    elevation: 40,
  },
  caps: {
    textTransform: 'uppercase',
  },
  fade: {
    opacity: 0.5,
    backgroundColor: colors.red,
  },
});

export default CommonButton;
