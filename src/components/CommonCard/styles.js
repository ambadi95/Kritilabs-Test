import {StyleSheet} from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    margin: 10,
    height: 100,
    width: '45%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
