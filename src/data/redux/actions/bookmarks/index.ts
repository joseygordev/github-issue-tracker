import { Dispatch } from 'redux';

import { BookmarkActionType, BookmarkAction } from '../../../../types/bookmarks';

export const addBookmark = (issueId: number) => async (dispatch: Dispatch<BookmarkAction>) => {
  dispatch({ type: BookmarkActionType.ADD_BOOKMARK, payload: issueId });
};

export const removeBookmark = (issueId: number) => async (dispatch: Dispatch<BookmarkAction>) => {
  dispatch({ type: BookmarkActionType.REMOVE_BOOKMARK, payload: issueId });
};
