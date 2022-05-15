import { useState } from 'react';
import { Issue } from './../types/issues';
import { useSelector } from 'react-redux';
import { useBookmarksReturnValue } from '../types/bookmarks';
import { AppState } from '../data/redux';

export default function useBookmarks(): useBookmarksReturnValue {
  const { issues } = useSelector((state: AppState) => state.issuesReducer);
  const { bookmarks } = useSelector((state: AppState) => state.bookmarksReducer);

  const [bookmarksData, setBookmarksData] = useState<Issue[]>([])

  const getBookmarks = () => { 
    setBookmarksData(
      bookmarks.map((bookmarkId) => ({...issues.filter((issue) => issue.id === bookmarkId)[0]}))
    );
  };

  return {
    data: {
      bookmarks: bookmarksData,
    },
    actions: {
      getBookmarks,
    },
  };
}
