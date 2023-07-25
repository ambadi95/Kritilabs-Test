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
  buttonStyle: {
    marginTop: 30,
  },
  errorStyle: {
    marginTop: 10,
    marginBottom: 10,
    color: colors.red,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;
