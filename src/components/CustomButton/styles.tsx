import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    width: 130,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  primaryButton: {
    width: 120,
    borderWidth: 1,
    borderColor: Colors.blue,
    backgroundColor: 'transparent',
  },
  secondaryButton: {
    width: 'auto',
    paddingHorizontal: 10,
  },
  defaultText: {
    color: Colors.blue,
    fontSize: 12,
    letterSpacing: 0.8,
  },
});
