import { createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

import bookmarksReducer from './reducers/bookmarks';
import issuesReducer from './reducers/issues';

const rootReducer = combineReducers({ issuesReducer, bookmarksReducer });

export type AppState = ReturnType<typeof rootReducer>;

export type TypedDispatch = ThunkDispatch<AppState, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();

export default createStore(rootReducer, applyMiddleware(thunk));
