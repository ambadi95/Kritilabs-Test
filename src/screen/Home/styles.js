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
  card: {
    backgroundColor: colors.primary,
    margin: 10,
    height: 100,
    width: '45%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 40,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default styles;
