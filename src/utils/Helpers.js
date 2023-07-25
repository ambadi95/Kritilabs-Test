import {ToastAndroid, Alert, Platform} from 'react-native';

export const toastMessage = (message, type = 'short') => {
  const isShort = type === 'short';
  const toastType = isShort ? ToastAndroid.SHORT : ToastAndroid.LONG;
  if (Platform.OS === 'android') {
    return ToastAndroid.show(message, toastType);
  } else {
    return Alert.alert(message);
  }
};
