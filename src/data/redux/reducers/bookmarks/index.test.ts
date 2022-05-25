import bookmarksReducer from './index';
import mockIssues from '../../../mocks/issues';

import { BookmarkAction, BookmarkActionType, BookmarkState } from '../../../../types/bookmarks';

const initialState: BookmarkState = {
  bookmarks: [],
};

describe('Bookmarks Reducer', () => {
  it('handles ADD_BOOKMARK', () => {
    const action: BookmarkAction = {
      type: BookmarkActionType.ADD_BOOKMARK,
      payload: mockIssues[0].id,
    };

    const newState = bookmarksReducer(initialState, action);

    expect(newState).toEqual({
      bookmarks: [mockIssues[0].id]
    });
  });

  it('handles REMOVE_BOOKMARK', () => {
    const action: BookmarkAction = {
      type: BookmarkActionType.REMOVE_BOOKMARK,
      payload: mockIssues[0].id,
    };

    const newState = bookmarksReducer(initialState, action);

    expect(newState).toEqual({
      bookmarks: []
    });
  });
});
