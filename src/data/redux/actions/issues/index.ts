import { Dispatch } from 'redux';

import * as issueEndpoints from '../../../api/issues';

import { IssueActionType, IssueAction } from '../../../../types/issues';
import { AppState } from '../..';

export const getIssues = () => async (dispatch: Dispatch<IssueAction>, getState: () => AppState) => {
  dispatch({ type: IssueActionType.SET_ISSUES_LOADING });

  const { owner, repo, filters, currentPage } = getState().issuesReducer;

  let filter = filters.find((x) => x.isActive)?.id;
  if (!filter || filters.every((x) => x.isActive)) {
    filter = 'all';
  }

  try {
    const issues = await issueEndpoints.get({
      owner,
      repo,
      filter,
      page: currentPage,
    });

    dispatch({ type: IssueActionType.SET_ISSUES_SUCCESS, payload: issues });
  } catch (error) {
    dispatch({ type: IssueActionType.SET_ISSUES_ERROR, payload: error });
  }
};

export const commitOwner = (owner: string) => (dispatch: Dispatch<IssueAction>) => {
  dispatch({ type: IssueActionType.COMMIT_OWNER, payload: owner });
};

export const commitRepo = (repo: string) => (dispatch: Dispatch<IssueAction>) => {
  dispatch({ type: IssueActionType.COMMIT_REPO, payload: repo });
};

export const setPage = (pageNumber: number) => (dispatch: Dispatch<IssueAction>) => {
  dispatch({ type: IssueActionType.SET_PAGE, payload: pageNumber });
};

export const toggleFilter = (filterIds: string[]) => (dispatch: Dispatch<IssueAction>) => {
  dispatch({ type: IssueActionType.TOGGLE_FILTER, payload: filterIds });
};