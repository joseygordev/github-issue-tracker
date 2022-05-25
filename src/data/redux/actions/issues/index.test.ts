import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import { commitOwner, commitRepo, getIssues } from './index';
import { initialState } from '../../reducers/issues';
import mockIssues from '../../../mocks/issues';

import { AppState } from '../..';
import { IssueActionType } from '../../../../types/issues';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Issue Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_ISSUES_SUCCESS when issue fetching has succeeded', () => {
    fetchMock.getOnce('https://api.github.com/repos/facebook/react-native/issues?state=all&page=1', {
      body: mockIssues,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: IssueActionType.SET_ISSUES_LOADING },
      { type: IssueActionType.SET_ISSUES_SUCCESS, payload: mockIssues },
    ];
    const store = mockStore({ issuesReducer: initialState });

    return store.dispatch<any>(getIssues()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_ISSUES_SUCCESS when no filters or sortCriteria are available', () => {
    fetchMock.getOnce('https://api.github.com/repos/facebook/react-native/issues?state=all&page=1', {
      body: mockIssues,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: IssueActionType.SET_ISSUES_LOADING },
      { type: IssueActionType.SET_ISSUES_SUCCESS, payload: mockIssues },
    ];
    const store = mockStore({
      issuesReducer: {
        ...initialState,
        filters: [],
        sortCriteria: [],
      },
    });

    return store.dispatch<any>(getIssues()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('succesfully handles COMMIT_OWNER', () => {
    const expectedOwner = 'expo';

    const store = mockStore({
      issuesReducer: initialState,
    });

    store.dispatch<any>(commitOwner(expectedOwner));

    setImmediate(() => {
      expect((store.getState() as AppState).issuesReducer.owner).toEqual(expectedOwner);
    });
  });

  it('succesfully handles COMMIT_REPO', () => {
    const expectedRepo = 'expo';

    const store = mockStore({
      issuesReducer: initialState,
    });

    store.dispatch<any>(commitRepo(expectedRepo));

    setImmediate(() => {
      expect((store.getState() as AppState).issuesReducer.repo).toEqual(expectedRepo);
    });
  });
});
