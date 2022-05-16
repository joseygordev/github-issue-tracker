import { BookmarkState, BookmarkActionType, BookmarkAction } from '../../../../types/bookmarks';

const initialState: BookmarkState = {
  bookmarks: [],
};

export default (state: BookmarkState = initialState, action: BookmarkAction): BookmarkState => {
  switch (action.type) {
    case BookmarkActionType.ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload as number],
      };
    case BookmarkActionType.REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks.filter((bookmark) => bookmark !== action.payload as number)],
      };
    default:
      return state;
  }
};
