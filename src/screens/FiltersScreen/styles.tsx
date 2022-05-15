import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    justifyContent: 'space-between',
  },
  filter: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    paddingTop: 6,
    marginVertical: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
  },
  activeFilter: {
    borderColor: Colors.blue,
  },
  inputs: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignSelf: 'center',
    minWidth: '100%'
  }
});
