import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Images} from '../../utils/Images';
import InputWithLabel from '../../components/InputWithLabel';
import CommonButton from '../../components/CommonButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SCREENS} from '../../utils/Constant';

import {
  basicDataVariablesLogin,
  basicDataLogin,
  basicDataVariablesbasicDataLoginErrorMessages as errorText,
} from '../../utils/Constant';

const LoginPage = ({navigation}) => {
  const [basicDetails, setBasicDetails] = useState({
    ...basicDataVariablesLogin,
  });
  const [error, setError] = useState({});

  const handleInput = (value, key) => {
    const tempErrors = {...error};
    tempErrors[key] = undefined;
    setBasicDetails({...basicDetails, [key]: value});
    setError({...error, ...tempErrors});
  };

  const login = async () => {
    let valid = true;
    let validationCheck = [...basicDataLogin];
    validationCheck.forEach(key => {
      if (basicDetails[key] === '') {
        valid = false;
        error[key] = errorText[key];
      }
    });
    setError({...error});
    if (valid) {
      navigation.replace(SCREENS.HOMEPAGE);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Image source={Images.logo} style={styles.imageStyle} />
        <InputWithLabel
          placeholder="User Name"
          onChangeText={value => handleInput(value, 'UserName')}
          errorMessage={error?.UserName}
        />
        <InputWithLabel
          placeholder="Password"
          onChangeText={value => handleInput(value, 'Password')}
          errorMessage={error?.Password}
          secureTextEntry={true}
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.FORGOTPASSWORD);
            }}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <CommonButton
          title="Submit"
          isPrimary={false}
          isCaps={true}
          onPress={login}
        />
      </KeyboardAwareScrollView>
      <View style={styles.footerContainer}>
        <Text>© Copyright All rights resevred</Text>
      </View>
    </View>
  );
};

export default LoginPage;
