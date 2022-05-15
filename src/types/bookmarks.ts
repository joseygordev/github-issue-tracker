import { Issue } from './issues';
export interface BookmarkState {
  bookmarks: number[];
}

export interface BookmarkAction {
  type: BookmarkActionType;
  payload: number;
}

export enum BookmarkActionType {
  ADD_BOOKMARK = 'ADD_BOOKMARK',
  REMOVE_BOOKMARK = 'REMOVE_BOOKMARK',
}

export interface useBookmarksReturnValue {
  data: {
    bookmarks: Issue[];
  };
  actions: {
    getBookmarks: () => void;
  };
}
