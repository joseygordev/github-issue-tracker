import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  issuesContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 80,
  },
  label: {
    color: Colors.steel,
    fontSize: 12,
    letterSpacing: 0.9,
    marginTop: 6,
  },
  loading: {
    marginTop: 24,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
  },
  title: {
    fontSize: 18,
    lineHeight: 18,
    marginTop: 8,
    marginBottom: 16,
    color: Colors.steel,
  },
  separator: {
    marginVertical: 16,
    height: 1,
    width: '100%',
    backgroundColor: Colors.border + '88',
  },
  card: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 4,
    shadowColor: Colors.steel,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },
  error: {
    color: Colors.red,
    alignSelf: 'center',
    marginTop: 16,
  },
  paginationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 16,
  },
  containerFiltersSelected: {
    padding: 16,
    paddingBottom: 8,
    backgroundColor: Colors.pageBackground,
  },
  filtersLabel: {
    flexDirection: 'row',
  }
});
