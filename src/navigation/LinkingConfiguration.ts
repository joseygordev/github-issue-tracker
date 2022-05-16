import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/navigation';

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
          Bookmark: {
            screens: {
              BookmarkScreen: 'two',
            },
          },
        },
      },
      Filters: 'filters',
      IssueDetails: 'issue details',
    },
  },
};

export default linking;
