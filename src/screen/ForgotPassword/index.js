import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Images} from '../../utils/Images';
import InputWithLabel from '../../components/InputWithLabel';
import CommonButton from '../../components/CommonButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  basicDataVariablesPassword,
  basicDataPassword,
  basicDataVariablesbasicDataPasswordErrorMessages as errorText,
} from '../../utils/Constant';
import {toastMessage} from '../../utils/Helpers';

const ForgotPassword = ({navigation}) => {
  const [basicDetails, setBasicDetails] = useState({
    ...basicDataVariablesPassword,
  });
  const [error, setError] = useState({});
  const [matchError, setMatchError] = useState();

  const handleInput = (value, key) => {
    setMatchError('');
    const tempErrors = {...error};
    tempErrors[key] = undefined;
    setBasicDetails({...basicDetails, [key]: value});
    setError({...error, ...tempErrors});
  };

  const ChangePassword = async () => {
    let valid = true;
    let validationCheck = [...basicDataPassword];
    validationCheck.forEach(key => {
      if (basicDetails[key] === '') {
        valid = false;
        error[key] = errorText[key];
      }
    });
    setError({...error});
    if (valid) {
      if (basicDetails.NewPassword !== basicDetails.ConfirmPassword) {
        setMatchError('Password Does not Match');
      } else {
        toastMessage('Password changed successfully', 'short');
        navigation.goBack();
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Image source={Images.logo} style={styles.imageStyle} />
        <InputWithLabel
          placeholder="New Password"
          onChangeText={value => handleInput(value, 'NewPassword')}
          errorMessage={error?.NewPassword}
          secureTextEntry={true}
        />
        <InputWithLabel
          placeholder="Confirm Password"
          onChangeText={value => handleInput(value, 'ConfirmPassword')}
          errorMessage={error?.ConfirmPassword}
          secureTextEntry={true}
        />
        {matchError && <Text style={styles.errorStyle}>{matchError}</Text>}
        <CommonButton
          title="Submit"
          isPrimary={false}
          isCaps={true}
          onPress={ChangePassword}
          buttonStyle={styles.buttonStyle}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPassword;
