import issuesReducer from './index';
import mockIssues, { mockFilters } from '../../../mocks/issues';
import { initialState } from './index';

import { IssueAction, IssueActionType } from '../../../../types/issues';

describe('Issues Reducer', () => {
  it('handles SET_ISSUES_LOADING', () => {
    const action: IssueAction = {
      type: IssueActionType.SET_ISSUES_LOADING,
      payload: undefined,
    };

    const newState = issuesReducer(initialState, action);

    expect(newState.issues).toEqual([]);
    expect(newState.loading).toEqual(true);
  });

  it('handles SET_ISSUES_SUCCESS', () => {
    const action: IssueAction = {
      type: IssueActionType.SET_ISSUES_SUCCESS,
      payload: mockIssues,
    };

    const newState = issuesReducer(initialState, action);

    expect(newState.issues).toEqual(mockIssues);
    expect(newState.loading).toEqual(false);
  });

  it('handles SET_ISSUES_ERROR', () => {
    const action: IssueAction = {
      type: IssueActionType.SET_ISSUES_ERROR,
      payload: Error('test error'),
    };

    const newState = issuesReducer(initialState, action);

    expect(newState.issues).toEqual([]);
    expect(newState.loading).toEqual(false);
    expect(newState.error).toEqual(Error('test error'));
  });

  it('handles SET_COMMIT_OWNER', () => {
    const action: IssueAction = {
      type: IssueActionType.COMMIT_OWNER,
      payload: 'expo',
    };

    const newState = issuesReducer(initialState, action);

    expect(newState.owner).toEqual('expo');
  });

  it('handles SET_COMMIT_REPO', () => {
    const action: IssueAction = {
      type: IssueActionType.COMMIT_REPO,
      payload: 'expo',
    };

    const newState = issuesReducer(initialState, action);

    expect(newState.repo).toEqual('expo');
  });

  it('handles SET_PAGE', () => {
    const action: IssueAction = {
      type: IssueActionType.SET_PAGE,
      payload: 3,
    };

    const newState = issuesReducer(initialState, action);

    expect(newState.currentPage).toEqual(3);
  });

  it('handles TOGGLE_FILTER', () => {
    const targetFilter = { ...mockFilters[0] };

    const action: IssueAction = {
      type: IssueActionType.TOGGLE_FILTER,
      payload: [targetFilter.id],
    };

    const newState = issuesReducer(initialState, action);

    expect(newState.filters.find((x) => x.id === targetFilter.id)?.isActive).toEqual(!targetFilter.isActive);
  });
});
