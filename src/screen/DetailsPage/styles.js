import {StyleSheet} from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  headingStyle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 20,
    marginBottom: 20,
  },
  para: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default styles;
