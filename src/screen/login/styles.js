import {StyleSheet} from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
  },
  imageStyle: {
    marginTop: 140,
    alignSelf: 'center',
  },
  forgotPasswordContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  footerContainer: {
    position: 'relative',
    bottom: 15,
    height: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
