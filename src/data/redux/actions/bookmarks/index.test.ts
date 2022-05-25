import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { addBookmark, removeBookmark } from './index';
import mockIssues from '../../../mocks/issues';

import { BookmarkActionType } from '../../../../types/bookmarks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Bookmark Actions', () => {
  it('creates ADD_BOOKMARK_SUCCESS when bookmark has been succesfully added', () => {
    mockNonEmptyStorage();

    const addedIssue = mockIssues[0].id;

    const expectedActions = [
      { type: BookmarkActionType.ADD_BOOKMARK, payload: addedIssue },
    ];

    const store = mockStore({ bookmarks: [] });

    return store.dispatch<any>(addBookmark(addedIssue)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates REMOVE_BOOKMARK_SUCCESS when bookmark has been succesfully removed', () => {
    mockNonEmptyStorage();
    const removedIssueId = mockIssues[0].id;

    const expectedActions = [
      { type: BookmarkActionType.REMOVE_BOOKMARK, payload: removedIssueId },
    ];

    const store = mockStore({ bookmarks: [] });

    return store.dispatch<any>(removeBookmark(removedIssueId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

const mockNonEmptyStorage = () => {
  jest.spyOn(AsyncStorage, 'getItem').mockImplementation(
    () =>
      new Promise((resolve) => {
        resolve(JSON.stringify(mockIssues));
      })
  );
};
