import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import colors from '../../utils/Colors';

const InputWithLabel = props => {
  const {
    placeholder,
    onChangeText,
    keyboardType = 'default',
    maxLength = 50,
    style,
    value,
    placeholderTextColor = colors.primary,
    multiline = false,
    numberOfLines = 1,
    onFocus,
    onBlur,
    editable = true,
    onSubmitEditing,
    refs,
    secureTextEntry = false,
    errorMessage = null,
  } = props;

  const [isFocused, setFocesed] = React.useState(false);

  const onFocusHandler = () => {
    setFocesed(true);
    if (onFocus) {
      onFocus();
    }
  };

  const onBlurHandler = () => {
    setFocesed(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        autoCorrect={false}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        style={[
          styles.input,
          style,
          isFocused ? styles.focusedInput : '',
          errorMessage ? {borderColor: colors.red} : null,
        ]}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        editable={editable}
        onSubmitEditing={onSubmitEditing}
        ref={refs}
        secureTextEntry={secureTextEntry}
      />
      {errorMessage ? (
        <Text style={styles.requiredErrorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 10,
  },

  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    paddingLeft: 10,
  },
  focusedInput: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  requiredErrorText: {
    color: 'red',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default InputWithLabel;
