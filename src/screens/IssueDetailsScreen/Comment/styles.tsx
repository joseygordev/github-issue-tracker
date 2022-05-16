import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import issueStyles from '../../IssuesScreen/Issue/styles';

export default StyleSheet.create({
  ...issueStyles,
  label: {
    color: Colors.steel,
    fontSize: 12,
    letterSpacing: 0.9,
    marginTop: 6,
  },
});
