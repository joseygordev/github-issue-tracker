import React from 'react';
import { create, act } from 'react-test-renderer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../data/redux';
import MockNavigation from '../../data/mocks/navigation';
import mockIssues from '../../data/mocks/issues';
import BookmarksScreen from './index';

describe('Bookmarks Screen', () => {
  it('renders correctly', async () => {

    jest.spyOn(AsyncStorage, 'getItem').mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve(JSON.stringify({issues: mockIssues, bookmarks: [1]}));
        })
    );
    
    const createFreshTree = () =>
      create(
        <ReduxProvider store={store}>
          <MockNavigation component={BookmarksScreen} />
        </ReduxProvider>
      );
    
    const tree = createFreshTree();

    await act(async () => jest.runAllTimers());

    expect(tree).toMatchSnapshot();
  });
  
  it('renders with no data', async () => {
    const createFreshTree = () =>
      create(
        <ReduxProvider store={store}>
          <MockNavigation component={BookmarksScreen} />
        </ReduxProvider>
      );
    
    const tree = createFreshTree();
    const bookmarks = tree.root.findByProps({ testID: 'fallbackMessage' }).props;

    await act(async () => jest.runAllTimers());


    expect(bookmarks.children).toEqual("You don't have bookmarks yet!");
  });
});
