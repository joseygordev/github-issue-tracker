import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Issues: {
            screens: {
              IssuesScreen: 'one',
            },
          },
          IssueDetails: {
            screens: {
              IssueDetailsScreen: 'two',
            },
          },
          Bookmark: {
            screens: {
              BookmarkScreen: 'two',
            },
          },
        },
      },
      Filters: 'filters',
    },
  },
};

export default linking;
